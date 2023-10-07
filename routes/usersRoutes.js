const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.get('/', (req, res, next) => {
    res.json({
        status: true,
        message: 'Its working'
    })
})
router.get('/get-users', usersController.getUsers)
router.post('/register', usersController.registerUser)
router.post('/login', usersController.loginUser)

module.exports = router