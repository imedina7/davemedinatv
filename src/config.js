
const envars = {
    PORT: process.env.PORT || 8080,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'localhost',
    HEROKU_BRANCH: process.env.HEROKU_BRANCH || 'local',
    LIVE_YOUTUBE_URL: process.env.LIVE_YOUTUBE_URL || null,
    LIVE_TIMESTAMP: process.env.LIVE_TIMESTAMP || null,
    WORKER_INTERVAL_MS: process.env.WORKER_INTERVAL_MS || 30000,
    SERVICE_ACC_KEY: (process.env.SERVICE_ACC_KEY) ? process.env.SERVICE_ACC_KEY : null,
    SERVICE_ACC_SUB: process.env.SERVICE_ACC_SUB || null,
    GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS || null,
    YT_CHANNEL_ID: process.env.YT_CHANNEL_ID || null,
    G_APIKEY: process.env.G_APIKEY || null,
    REDIS_URL: process.env.REDIS_URL || 'redis://127.0.0.1:6379'
}

module.exports = envars