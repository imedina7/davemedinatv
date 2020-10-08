const { google } = require('googleapis')

const authenticate = (apikey) => {
    const authPromise = new Promise((resolve, reject) => {
        try {
            const client = google.youtube({
                version: 'v3',
                apikey: apikey
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
        client.liveBroadcasts.list({
            "part": [
                "snippet,contentDetails,status"
            ],
            "broadcastType": "all",
            "mine": true
        }).then((response) => {
            resolve(response.result.items[0])
        }).catch((err) => {
            reject(err)
        })
    })

    return itemPromise
}


module.exports = { authenticate, getLastLivestream }