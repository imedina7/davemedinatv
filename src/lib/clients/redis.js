const envars = require('../../config')
const { init, set, get } = require('node-cache-redis')

const initialize = () => {
    return init({ redisOptions: { url: envars.REDIS_URL } })
}

const saveClick = async (click) => {
    const clickId = await genClickId()

    set(`click:${clickId}`, click)
}

async function* genClickId() {
    let totalClicks = await get('totalClicks')

    if (totalClicks === null)
        totalClicks = 0
    const newClickKey = totalClicks + 1

    yield newClickKey
}

module.exports = { initialize, set, get, saveClick }