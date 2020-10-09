return (() => {

    const ytClient = require('./lib/clients/youtube')
    const envars = require('./config')
    let interval_ID = null

    const WORKER_INTERVAL_MS = envars.WORKER_INTERVAL_MS

    let intervals = null
    let worker_client = null

    const getClient = () => {
        const clientPromise = new Promise((resolve, reject) => {
            const client = (worker_client === null) ? ytClient.authenticate(envars.G_APIKEY) : worker_client

            if (client === null) {
                reject('Invalid client')
            } else {
                console.log('*** GOT CLIENT ***')
                resolve(client)
            }

        })
        return clientPromise
    }

    const init = function () {
        intervals = 0
        return getClient()
    }

    const run = function (client) {
        interval_ID = setInterval(() => {
            console.log(`** INTERVAL ${intervals++} HIT **`)

            ytClient.getLastLivestream(client).then((livestream) => {
                console.log('last livestream is: ')
                console.log(livestream)
            }).catch((err) => {
                console.error('Failed to get last livestream: ', err)
            })
        }, WORKER_INTERVAL_MS)
    }
    const main = () => {
        init().then((client) => {
            try {
                if (!client)
                    throw new Exception('Invalid client')

                run(client)

                console.log('*** DVMTV WORKER RUNNING ***')
            } catch (err) {
                clearInterval(interval_ID)

                console.error('*** DVMTV WORKER STOPPED ***', err)
                console.log('*** RESTARTING... ***')
                main()
            }
        }).catch((err) => {
            console.error('*** DVMTV WORKER COULDN\'T INITIALIZE, EXITING... ***', err)
            return 1
        })

    }
    return main()
})()