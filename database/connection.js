const mongoose = require('mongoose')
const config = require('../config')

let connectionURL
if (config.env === 'prod') {
    connectionURL = config.database.prod.connectionURL
} else {
    connectionURL = config.database.dev.connectionURL
}

mongoose.connect(connectionURL).then(() => {
    console.log(`${config.env} DB connected successfully`)
}).catch(() => {
    console.log(`${config.env} DB connection failed`)
})