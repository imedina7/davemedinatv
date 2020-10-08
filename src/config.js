const envars = {
    PORT: process.env.PORT || 8080,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'localhost',
    HEROKU_BRANCH: process.env.HEROKU_BRANCH || 'local',
    LIVE_YOUTUBE_URL: process.env.LIVE_YOUTUBE_URL || null,
    LIVE_TIMESTAMP: process.env.LIVE_TIMESTAMP || null,
    WORKER_INTERVAL_MS: process.env.WORKER_INTERVAL_MS || 30000
}

module.exports = envars