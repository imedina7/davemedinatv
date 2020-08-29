const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
app.use('/', serveStatic(path.join(__dirname, '../dist')))
const port = process.env.PORT || 8080

const liveUrl = process.env.LIVE_YOUTUBE_URL || null

app.use('/api/liveStatus', (req, res, next) => {
    console.log(req)


    const jsonResponse = { liveUrl }

    res.send(JSON.stringify(jsonResponse))

    next()
})

app.listen(port)