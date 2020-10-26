const Click = require('../models/Click')
const liveUrl = require('../../config').LIVE_YOUTUBE_URL

const ExpressRouter = require('express').Router
const URL = require('url').URL
const redis = require('../clients/redis')

function redirect(res, redirUrl) {
  if (redirUrl === undefined || redirUrl === null) {
    res.writeHead(301, { Location: '/' })
  } else {
    res.writeHead(301, { Location: redirUrl })
  }
  res.send()
}

const redir = (req, res) => {
  const query = req.query
  const redirUrl = query.url

  const refId = query.rid
  const click = new Click(refId, redirUrl)

  redis.saveClick(click).then(() => {
    redirect(res, redirUrl)
  }).catch((err) => {
    console.error('[!] UX error: ', err)
    redirect(res, redirUrl)
  })
}
const live = (req, res) => {
  redirect(res, liveUrl)
}
const Router = () => {
  const router = new ExpressRouter()

  router.get('/redir', redir)
  router.get('/live', live)
  return router
}

module.exports = { Router }
