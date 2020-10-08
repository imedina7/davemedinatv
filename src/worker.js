(() => {

    const axios = require('axios')
    const ytClient = require('./lib/clients/youtube')
    const envars = require('./config')

    const WORKER_INTERVAL_MS = envars.WORKER_INTERVAL_MS

    let intervals = 0
    const init = function () {
        return ytClient.authenticate(envars.G_APIKEY)
    }
    const run = function (client) {
        setInterval(() => {
            console.log(`** INTERVAL ${intervals++} HIT **`)
            ytClient.getLastLivestream(client).then((livestream) => {
                console.log('last livestream is: ')
                console.log(livestream)
            }).catch((err) => {
                console.error('failed to get last livestream: ', err)
            })
        }, WORKER_INTERVAL_MS)
    }
    const main = () => {

        init().then((client) => {
            console.log('*** GOT YOUTUBE CLIENT ***')
            run(client)
            console.log('*** DVMTV WORKER RUNNING ***')

        })

    }
    main()
})()