const { google } = require('googleapis')
const fs = require('fs')
const { InvalidClientError } = require('../utils/exceptions')
const envars = require('../../config')

const SERVICE_ACC_KEY = envars.SERVICE_ACC_KEY
const SERVICE_ACC_SUB = envars.SERVICE_ACC_SUB
const GOOGLE_APPLICATION_CREDENTIALS = envars.GOOGLE_APPLICATION_CREDENTIALS

const genKeyFile = () => {
  try {
    if (fs.existsSync(GOOGLE_APPLICATION_CREDENTIALS)) {
      console.log(`${GOOGLE_APPLICATION_CREDENTIALS} found, skipping...`)
      return GOOGLE_APPLICATION_CREDENTIALS
    }
    fs.writeFileSync(GOOGLE_APPLICATION_CREDENTIALS, SERVICE_ACC_KEY, { mode: 0o600, flag: 'w' })
    console.log(`${GOOGLE_APPLICATION_CREDENTIALS} file written successfuly!`)
  } catch (err) {
    console.log(err)
    console.error(`Could not save file: '${GOOGLE_APPLICATION_CREDENTIALS}'\n`)
    throw err
  }
  return GOOGLE_APPLICATION_CREDENTIALS
}

async function authenticate () {
  genKeyFile()
  const auth = new google.auth.GoogleAuth({
    sub: SERVICE_ACC_SUB,
    scopes: ['https://www.googleapis.com/auth/youtube.readonly',
      'https://www.googleapis.com/auth/youtube.force-ssl']
  })

  const authClient = await auth.getClient()

  const client = google.youtube({
    version: 'v3',
    sub: SERVICE_ACC_SUB,
    auth: authClient
  })
  return client
}

const getLastLivestream = (client) => {
  return new Promise((resolve, reject) => {
    if (client === null) { reject(InvalidClientError('Invalid Youtube client')) }

    const options = {
      part: [
        'snippet,contentDetails,status'
      ],
      broadcastType: 'all',
      mine: true
    }

    client.liveStreams.list(options).then((response) => {
      console.log('getLastLivestream: Got response!')
      const livestreamObj = response.result.items[0]
      resolve(livestreamObj)
    }).catch((err) => {
      console.log('getLastLivestream: FAILED')
      reject(err)
    })
  })
}
async function getChannel (client, channelID) {
  const optionsChannel = { part: ['contentDetails'], id: channelID }
  const channels = await client.channels.list(optionsChannel)
  return channels.data.items[0]
}
async function getPlaylistItems (client, playlistID) {
  const optionsPlaylistItems = { part: ['snippet,contentDetails'], playlistId: playlistID }
  const playlistItems = await client.playlistItems.list(optionsPlaylistItems)

  return playlistItems
}
async function getChannelPlaylists (client) {
  const options = { part: ['snippet,contentDetails'], channelId: envars.YT_CHANNEL_ID }
  const channelPlaylists = await client.playlists.list(options)

  const playlists = []

  channelPlaylists.data.items.forEach(playlist => {
    const playlistData = {
      id: playlist.id,
      title: playlist.snippet.title,
      videos: []
    }
    playlists.push(playlistData)
  })
  for (const playlist of playlists) {
    const playlistVideos = await getPlaylistItems(client, playlist.id)
    playlist.videos = playlistVideos.data.items
  }

  return playlists
}
async function getLatestUploads (client) {
  const channel = await getChannel(client, envars.YT_CHANNEL_ID)

  const uploadsPlaylistId = channel.contentDetails.relatedPlaylists.uploads

  const playlistItems = await getPlaylistItems(client, uploadsPlaylistId)

  const uploadsItems = playlistItems.data.items

  return uploadsItems
}
const getVideos = (client, videos) => {
  return new Promise((resolve, reject) => {
    if (client === null) { reject(InvalidClientError('Invalid Youtube client')) }

    const options = {
      part: [
        'snippet,contentDetails,status'
      ],
      id: videos.join(',')
    }

    client.videos.list(options).then((response) => {
      console.log('getVideos: Got response!')
      resolve(response.data.items)
    }).catch((err) => {
      console.log('getVideos: FAILED')
      reject(err)
    })
  })
}

module.exports = {
  authenticate,
  getLastLivestream,
  getVideos,
  getLatestUploads,
  getChannelPlaylists
}
