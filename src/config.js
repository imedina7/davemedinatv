const SERVICE_ACC_KEY = (process.env.SERVICE_ACC_KEY) ? JSON.parse(process.env.SERVICE_ACC_KEY) : null
const TOKEN_SECRET = SERVICE_ACC_KEY.private_key || null

const envars = {
    PORT: process.env.PORT || 8080,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'localhost',
    HEROKU_BRANCH: process.env.HEROKU_BRANCH || 'local',
    LIVE_YOUTUBE_URL: process.env.LIVE_YOUTUBE_URL || null,
    LIVE_TIMESTAMP: process.env.LIVE_TIMESTAMP || null,
    WORKER_INTERVAL_MS: process.env.WORKER_INTERVAL_MS || 30000,
    SERVICE_ACC_KEY,
    TOKEN_SECRET,
    SERVICE_ACC_SUB: process.env.SERVICE_ACC_SUB || null
}

module.exports = envars