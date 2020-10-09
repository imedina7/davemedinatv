const { google } = require('googleapis')
const SERVICE_ACC_KEY = require('../../config').SERVICE_ACC_KEY
const SERVICE_ACC_SUB = require('../../config').SERVICE_ACC_SUB

const genJWTPayload = () => {
    return {
        iss: SERVICE_ACC_KEY.client_email,
        sub: SERVICE_ACC_SUB,
        scope: 'https://www.googleapis.com/auth/youtube.readonly',
    }
}

const authenticate = (access_token) => {
    const authPromise = new Promise((resolve, reject) => {
        try {
            const client = google.youtube({
                version: 'v3',
                auth: access_token
            })
            resolve(client)
        } catch (err) {
            reject(err)
        }
    })
    return authPromise
}

const getLastLivestream = (client) => {
    const itemPromise = new Promise((resolve, reject) => {
        if (client === null)
            reject('Invalid Youtube client')
        client.liveBroadcasts.list({
            "part": [
                "snippet,contentDetails,status"
            ],
            "broadcastType": "all",
            "mine": true
        }).then((response) => {
            console.log('getLastLivestream: Got response!')
            resolve(response.result.items[0])
        }).catch((err) => {
            console.log('getLastLivestream: FAILED')
            reject(err)
        })
    })

    return itemPromise
}


module.exports = { authenticate, getLastLivestream }