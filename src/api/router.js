const ExpressRouter = require('express').Router
const livestream = require('./livestream')
const VideoRouter = require('./videos')

const ApiRouter = () => {
    const router = new ExpressRouter()

    router.use('/video', VideoRouter())
    router.get('/liveStatus', livestream.liveStatus)
    return router
}

module.exports = ApiRouter