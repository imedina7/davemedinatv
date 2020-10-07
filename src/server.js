const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
app.use('/', serveStatic(path.join(__dirname, '../dist')))
const port = process.env.PORT || 8080

const liveUrl = process.env.LIVE_YOUTUBE_URL || null
const liveTimestamp = process.env.LIVE_TIMESTAMP || null

app.use('/api/liveStatus', (req, res, next) => {
    console.log(req)
    if (liveUrl && liveTimestamp) {
        const jsonResponse = { liveUrl, liveTimestamp }
        res.send(JSON.stringify(jsonResponse))
    } else {
        res.send(404)
    }

    next()
})

app.listen(port, () => {
    console.log(`Application started on port number: ${port}.`)
})
