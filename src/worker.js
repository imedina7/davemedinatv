(() => {

    const ytClient = require('./lib/clients/youtube')
    const envars = require('./config')
    let interval_ID = null

    const WORKER_INTERVAL_MS = envars.WORKER_INTERVAL_MS

    let intervals = null
    let worker_client = null

    async function getClient() {
        if (worker_client === null) {
            worker_client = await ytClient.authenticate()
        }
        return worker_client
    }

    const init = function () {
        intervals = 0
        return getClient()
    }
    const logIntervalStatus = (interval, status) => {
        if (status === 'clear') {
            return console.log('** INTERVAL CLEARED **')
        }
        return console.log(`** INTERVAL ${interval} ${status.toUpperCase()} **`)
    }
    const run = function (client) {
        interval_ID = setInterval(() => {
            logIntervalStatus(intervals, "hit")

            ytClient.getLastLivestream(client).then((livestream) => {
                console.log('last livestream is: ')
                console.log(livestream)
            }).catch((err) => {
                console.error('Failed to get last livestream: Error ', err.code, err.errors)
            })

            ytClient.getVideoInfo(client, ['3X3RQps6A40', '7b7Pm8QgJpw']).then((videos) => {
                console.log('Got videos: ')
                console.log(videos)
                logIntervalStatus(intervals++, "end")
            }).catch((err) => {
                console.error('Failed to get videos: ', err)
                logIntervalStatus(intervals++, "end")
            })
        }, WORKER_INTERVAL_MS)
    }
    const main = () => {
        return new Promise((resolve, reject) => {
            init().then((client) => {
                try {
                    if (!client)
                        throw new Exception('Invalid client')

                    run(client)

                    console.log('*** DVMTV WORKER RUNNING ***')
                } catch (err) {
                    clearInterval(interval_ID)
                    logIntervalStatus(null, 'clear')

                    console.error('*** DVMTV WORKER STOPPED ***', err)
                    console.log('*** RESTARTING... ***')
                    main()
                }
            }).catch((err) => {
                console.error('*** DVMTV WORKER COULDN\'T INITIALIZE, EXITING... ***', err)
                reject(err)
            })

        })

    }
    return main()
})()