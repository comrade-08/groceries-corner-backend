const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')
const { auth } = require('../middlewares/commonMiddleware')

router.post('/get-products', auth, productsController.getProducts)

module.exports = router