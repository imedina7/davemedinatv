const { google } = require('googleapis')
const fs = require('fs')
const envars = require('../../config')

const SERVICE_ACC_KEY = envars.SERVICE_ACC_KEY
const SERVICE_ACC_SUB = envars.SERVICE_ACC_SUB
const GOOGLE_APPLICATION_CREDENTIALS = envars.GOOGLE_APPLICATION_CREDENTIALS

const genKeyFile = () => {
    try {
        fs.writeFileSync(GOOGLE_APPLICATION_CREDENTIALS, SERVICE_ACC_KEY, { mode: 0o440, flag: 'w' })
        console.log(`${GOOGLE_APPLICATION_CREDENTIALS} file written successfuly!`)
    } catch (err) {
        if (err.errno == -13) {
            console.log(`${GOOGLE_APPLICATION_CREDENTIALS} file already exists, skipping...`)
            return GOOGLE_APPLICATION_CREDENTIALS
        }
        console.log(err)
        console.error(`Could not save file: '${GOOGLE_APPLICATION_CREDENTIALS}'\n`)
        throw err
    }
    return GOOGLE_APPLICATION_CREDENTIALS
}

async function authenticate() {
    genKeyFile()
    const auth = new google.auth.GoogleAuth({
        sub: SERVICE_ACC_SUB,
        scopes: ["https://www.googleapis.com/auth/youtube.readonly"]
    });

    const authClient = await auth.getClient();

    const client = google.youtube({
        version: 'v3',
        sub: SERVICE_ACC_SUB,
        auth: authClient,
    })
    return client
}

const getLastLivestream = (client) => {
    return new Promise((resolve, reject) => {
        if (client === null)
            reject('Invalid Youtube client')

        const options = {
            "part": [
                "snippet,contentDetails,status"
            ],
            "broadcastType": "all",
            "id": envars.YT_CHANNEL_ID
        }

        client.liveBroadcasts.list(options).then((response) => {
            console.log('getLastLivestream: Got response!')
            const livestreamObj = response.result.items[0]
            resolve(livestreamObj)
        }).catch((err) => {
            console.log('getLastLivestream: FAILED')
            reject(err)
        })
    })
}

const getVideoInfo = (client, videos) => {
    return new Promise((resolve, reject) => {
        if (client === null)
            reject('Invalid Youtube client')

        const options = {
            "part": [
                "snippet,contentDetails,status"
            ],
            "id": videos.join(',')
        }

        client.videos.list(options).then((response) => {
            console.log('getVideoList: Got response!')
            resolve(response.data.items)
        }).catch((err) => {
            console.log('getVideoList: FAILED')
            reject(err)
        })
    })
}

module.exports = { authenticate, getLastLivestream, getVideoInfo }