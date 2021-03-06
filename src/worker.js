(() => {
  const { InvalidClientError } = require('./lib/utils/exceptions')
  const ytClient = require('./lib/clients/youtube')
  const redis = require('./lib/clients/redis')
  const envars = require('./config')
  let intervalID = null

  const WORKER_INTERVAL_MS = envars.WORKER_INTERVAL_MS

  let intervals = null
  let workerClient = null

  async function getClient () {
    if (workerClient === null) {
      workerClient = await ytClient.authenticate()
    }
    return workerClient
  }

  const init = function () {
    intervals = 0
    redis.initialize()
    return getClient()
  }
  const logIntervalStatus = (interval, status) => {
    if (status === 'clear') {
      return console.log('** INTERVAL CLEARED **')
    }
    return console.log(`** INTERVAL ${interval} ${status.toUpperCase()} **`)
  }
  const run = function (client) {
    intervalID = setInterval(() => {
      logIntervalStatus(intervals, 'hit')

      ytClient.getLatestUploads(client).then((latestUploads) => {
        console.log(latestUploads)
        const lastUpdateDate = new Date()
        redis.set('latestUploads', { lastUpdate: lastUpdateDate, data: { items: latestUploads } }).then(() => {
          console.log('Successfuly saved latest uploads to cache.')
          logIntervalStatus(intervals++, 'end')
        }).catch(err => {
          console.error(err)
        })
      })
    }, WORKER_INTERVAL_MS)
  }
  const main = () => {
    return new Promise((resolve, reject) => {
      init().then((client) => {
        try {
          if (!client) { throw InvalidClientError('Invalid client') }

          run(client)

          console.log('*** DVMTV WORKER RUNNING ***')
        } catch (err) {
          clearInterval(intervalID)
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
})().catch(err => {
  console.log('*** DVMTV WORKER FINISHED WITH ERRORS ***')
  console.error(err)
})
