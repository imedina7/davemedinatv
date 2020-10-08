(() => {

    const axios = require('axios')
    const google = require('googleapis')
    const envars = require('./config')

    const WORKER_INTERVAL_MS = envars.WORKER_INTERVAL_MS

    let intervals = 0

    async function main() {
        await setInterval(() => {
            console.log(`** INTERVAL ${intervals++} HIT **`)

        }, WORKER_INTERVAL_MS)
    }
    main()
    console.log('*** DVMTV WORKER INITIALIZED ***')

})()