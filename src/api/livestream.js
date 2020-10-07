const envars = require('../config')
const liveUrl = envars.LIVE_YOUTUBE_URL
const liveTimestamp = envars.LIVE_TIMESTAMP

const livestream = {

    liveStatus: (req, res, next) => {

        console.log('*** liveStatusFetch REQUEST ***')
        if (req.cookies._csrf) {
            if (liveUrl) {
                const jsonResponse = { liveUrl, liveTimestamp }
                const jsonStringResponse = JSON.stringify(jsonResponse)

                console.log('*** liveStatusFetch RESPONSE ***')
                console.log(jsonResponse)

                res.send(jsonStringResponse)
            } else {
                console.log('*** liveStatusFetch RESPONSE ***')
                console.log('*** 404 NOT FOUND ***')
                res.send(404)
            }
        } else {
            res.send(403)
        }
        next()
    }
}

module.exports = livestream