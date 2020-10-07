const ExpressRouter = require('express').Router
const livestream = require('./livestream')

const ApiRouter = () => {
    const router = new ExpressRouter()

    router.get('/liveStatus', livestream.liveStatus)

    return router
}

module.exports = ApiRouter