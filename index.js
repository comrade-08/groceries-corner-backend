const express = require('express')
const serverless = require('serverless-http')
const app = express()
const config = require('./config')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router("./database/db.json")
const middleware = jsonServer.defaults()

server.use(middleware)
server.use(router)

if (config.env === 'dev') {
    server.listen(config.port.dev, () => {
        console.log(`Sever listening on port ${config.port.dev}`)
    })
} else {
    module.exports.handler = serverless(server)
}