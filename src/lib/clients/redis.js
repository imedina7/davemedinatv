const envars = require('../../config')
const { init, set, get } = require('node-cache-redis')

const initialize = () => {
    return init({ redisOptions: { url: envars.REDIS_URL } })
}

module.exports = { initialize, set, get }