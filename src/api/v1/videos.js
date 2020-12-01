const ExpressRouter = require('express').Router
const redis = require('../../lib/clients/redis')
const { playlists } = require('../../lib/utils/constants')

const retrieveCachedPlaylist = async (redis, playlistKey) => {
  if (redis) {
    const dbResponse = await redis.get(playlistKey)
    return dbResponse
  }
}
const videoGetters = (redis) => {
  return {
    latestUploads: async (req, res, next) => {
      try {
        const playlist = await retrieveCachedPlaylist(redis, playlists.LATEST_UPLOADS)
        res.send(playlist)
      } catch {
        res.sendStatus(500)
      } finally {
        next()
      }
    },
    playlists: async (req, res, next) => {
      try {
        const allPlaylists = await retrieveCachedPlaylist(redis, playlists.ALL_PLAYLISTS)
        res.send(allPlaylists)
      } catch {
        res.sendStatus(500)
      } finally {
        next()
      }
    }
  }
}
const VideoRouter = () => {
  const videoRouter = new ExpressRouter()

  redis.initialize()

  videoRouter.get('/latestUploads', videoGetters(redis).latestUploads)
  videoRouter.get('/playlists', videoGetters(redis).playlists)
  return videoRouter
}

module.exports = VideoRouter
