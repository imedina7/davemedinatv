const ExpressRouter = require('express').Router
const redis = require('../../lib/clients/redis')

const videoGetters = (redis) => {
    return {
        latestUploads: (req, res, next) => {
            redis.get('latestUploads').then((db_response) => {
                console.log(db_response)
                res.send(db_response.data.items)
                next()
            }).catch((err) => {
                console.error(err)
                res.sendStatus(500)
                next()
            })
        }
    }
}
const VideoRouter = () => {
    const videoRouter = new ExpressRouter()

    redis.initialize()

    videoRouter.get('/latestUploads', videoGetters(redis).latestUploads)
    return videoRouter
}

module.exports = VideoRouter