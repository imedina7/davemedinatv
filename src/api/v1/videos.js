const ExpressRouter = require('express').Router
const redis = require('../../lib/clients/redis')

const videoGetters = (redis) => {
  return {
    latestUploads: (req, res, next) => {
      redis.get('latestUploads').then((dbResponse) => {
        console.log(dbResponse)
        res.send(dbResponse.data.items)
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
