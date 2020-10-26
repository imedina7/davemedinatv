# davemedinatv

## Requirements:
In order to be able to setup the project and test the backend code, you have to follow these steps first:

### Get the Heroku CLI
```
npm install -g heroku
```

### Get a Google Service Account
- Create a [new google cloud project](https://console.cloud.google.com/projectcreate)
- [Create Service Account](https://console.cloud.google.com/apis/credentials) for that project and get the credentials
- Download the the json key file and copy the contents to the `SERVICE_ACC_KEY` environment var. (*DO NOT COMMIT THIS FILE* it will be saved automatically to a git ignored file)

### Install redis
The cache relies on a redis service, to install on Windows go to: https://redislabs.com/blog/redis-on-windows-10/
For Linux use your distribution's official repositories or [compile from source](https://redis.io/download).
You can also use your heroku provided addon's `REDIS_URL` env var

## Project setup
```
./setup.sh
```
Edit your `.env.template` with your env vars, and rename it to `.env`


### Test production server locally
```
heroku local
```

### Lints and fixes files
```
npm run lint
```
