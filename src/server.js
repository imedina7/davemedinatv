const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()

app.use('/', serveStatic(path.join(__dirname, '../dist')))

const port = process.env.PORT || 8080

const liveUrl = process.env.LIVE_YOUTUBE_URL || null
const liveTimestamp = process.env.LIVE_TIMESTAMP || null

app.use('/api/liveStatus', (req, res, next) => {
    console.log('*** liveStatusFetch REQUEST ***')
    console.log(req)

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

    next()
})

app.listen(port, () => {
    console.log(`Application started on port number: ${port}.`)
})
