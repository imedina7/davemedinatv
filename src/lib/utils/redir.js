import { Click } from '../models/Click'
const url = require('url')
const redis = require('../clients/redis')

const redir = (req, res, next) => {
    const query = url.parse(req.url, true).query;
    const redirUrl = query.url
    const refId = query.rid
    redis.saveClick()
    res.writeHead(301, { 'Location': redirUrl })
    next()
}

module.exports = redir