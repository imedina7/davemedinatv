const Click = require('../models/Click')

const ExpressRouter = require('express').Router
const URL = require('url').URL
const redis = require('../clients/redis')


function redirect(res, redirUrl) {
    res.writeHead(301, { 'Location': redirUrl });
}

const redir = (req, res, next) => {
    const query = req.query
    const redirUrl = query.url

    if (redirUrl === undefined) {
        redirect(res, '/', next);
    }

    const refId = query.rid
    const click = new Click(refId, redirUrl)

    redis.saveClick(click).then(() => {
        redirect(res, redirUrl, next);
    }).catch((err) => {
        redirect(res, redirUrl, next);
        console.error('[!] UX error: ', err)
    })

}

const Router = () => {
    const router = new ExpressRouter()

    router.get('/redir', redir)

    return router
}

module.exports = { Router }

