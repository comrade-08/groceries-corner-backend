const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
const User = require('../models/usersModel')
const { errors, JWT_SECRET_KEY } = require('../config')

module.exports = {
  getUsers: (req, res, next) => {
    User.find().then((users) => {
      res.json({
        status: true,
        response: users
      })
    }).catch((err) => {
      res.json({
        status: false,
        response: errors.somethingWrong
      })
    })
  },

  registerUser: (req, res, next) => {
    User.findOne({ mobileNumber: req.body.mobileNumber }).then((user) => {
      if (user) {
        res.json({
          status: false,
          response: 'Mobile Number already exist !'
        })
      } else {
        const salt = 10
        bcrypt.hash(req.body.password, salt).then((hashErr, hash) => {
          const newUser = new User({
            userName: req.body.userName,
            mobileNumber: req.body.mobileNumber,
            email: req.body.email,
            address: req.body.address,
            password: hash,
            incompleteOrders: [],
            ordersHistory: []
          })

          newUser.save().then((user) => {
            res.json({
              status: true,
              response: user
            })
          }).catch(() => {
            res.json({
              status: false,
              response: errors.somethingWrong
            })
          })
        }).catch((err) => {
          res.json({
            status: false,
            response: errors.somethingWrong
          })
        })
      }
    })
  },

  loginUser: (req, res, next) => {
    User.findOne({ mobileNumber: req.body.mobileNumber }).then((user) => {
      if (user) {
        bcrypt.compare(req.body.password, user.password).then(bcryptRes => {
          if (bcryptRes) {
            JWT.sign({
              data: user,
              loginPassword: req.body.password
            }, JWT_SECRET_KEY)
          } else {
            res.json({
              status: false,
              response: errors.incorrectPassword
            })
          }
        })
      } else {
        res.json({
          status: false,
          response: errors.userNotFound
        })
      }
    })
  }
}