const express = require('express')
const serverless = require('serverless-http')
const app = express()
const config = require('./config')
const connection = require('./database/connection')
const usersRoutes = require('./routes/usersRoutes')
const cors = require('cors')
const bodyParser = require('body-parser')
// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router("./database/db.json")
// const middleware = jsonServer.defaults()
// server.use(middleware)
// server.use(router)

app.use(cors({origin: '*'}))
app.use(bodyParser.json())
app.use('/users', usersRoutes)

if (config.env === 'dev') {
    app.listen(config.port.dev, () => {
        console.log(`Sever listening on port ${config.port.dev}`)
    })
} else {
    module.exports.handler = serverless(server)
}