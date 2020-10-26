const Click = require('../models/Click')
const liveUrl = require('../../config').LIVE_YOUTUBE_URL

const ExpressRouter = require('express').Router
const URL = require('url').URL
const redis = require('../clients/redis')

function redirect(res, redirUrl, next) {
  if (redirUrl === undefined || redirUrl === null) {
    res.writeHead(301, { Location: '/' })
  } else {
    res.writeHead(301, { Location: redirUrl })
  }
  next()
}

const redir = (req, res, next) => {
  const query = req.query
  const redirUrl = query.url

  const refId = query.rid
  const click = new Click(refId, redirUrl)

  redis.saveClick(click).then(() => {
    redirect(res, redirUrl, next)
  }).catch((err) => {
    console.error('[!] UX error: ', err)
    redirect(res, redirUrl, next)
  })
}
const live = (req, res, next) => {
  redirect(res, liveUrl, next)
}
const Router = () => {
  const router = new ExpressRouter()

  router.get('/redir', redir)
  router.get('/live', live)
  return router
}

module.exports = { Router }
