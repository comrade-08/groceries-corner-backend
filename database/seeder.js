const mongoose = require('mongoose')
const Product = require('../models/productsModel')
const User = require('../models/usersModel')
const config = require('../config')

let connectionURL
if (config.env === 'prod') {
  connectionURL = config.database.prod.connectionURL
} else {
  connectionURL = config.database.dev.connectionURL
}


const products = [
  {
    name: 'hamam soap',
    stock: 30,
    price: 22,
    keywords: ['soap', 'bathing', 'natural', 'skincare']
  }
]
const users = []

mongoose.connect(connectionURL, { useNewUrlParser: true }).then(() => {
  console.log(`${config.env} DB connected`)
}).catch(err => {
  console.log(err.stack);
  process.exit(1);
})

Product.deleteMany().then(() => {
  Product.insertMany(products).then(() => {
    mongoose.disconnect()
    console.log('products saved')
    process.exit()
  })
})