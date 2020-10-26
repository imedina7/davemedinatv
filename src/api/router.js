const ExpressRouter = require('express').Router
const livestream = require('./v1/livestream')
const VideoRouter = require('./v1/videos')

const ApiRouters = {
  v1: () => {
    const router = new ExpressRouter()

    router.use('/video', VideoRouter())
    router.get('/liveStatus', livestream.liveStatus)
    return router
  }
}

module.exports = ApiRouters
