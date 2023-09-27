const express = require('express')
const serverless = require('serverless-http')
const app = express()
const config = require('../config')
const server = require('json-server')

app.get('/', (req, res) => {
    res.json({
        status: true,
        message: "Welcome to my application"
    })
})

if (config.env === 'dev') {
    app.listen(config.port.dev, () => {
        console.log('Sever listening on port' + config.port.dev)
    })
} else {
    module.exports.handler = serverless(app)
}