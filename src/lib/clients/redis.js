const envars = require('../../config')
const { init, set, get } = require('node-cache-redis')

const initialize = () => {
    init({ redisOptions: { redisUrl: envars.REDIS_URL } })
}

module.exports = { initialize, set, get }