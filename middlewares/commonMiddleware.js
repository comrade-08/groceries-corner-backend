const JWT = require('jsonwebtoken')
const { errors, JWT_SECRET_KEY } = require("../config")

module.exports = {
  auth: (req, res, next) => {
    // console.log(req.body, 'auth')
    if (req && req.body && req.body.token) {
      const token = req.body.token
      const verified = JWT.verify(token, JWT_SECRET_KEY)
      if (verified) {
        req.body.decoded = JWT.decode(token).data
        console.log(req.body)
        next()
      } else {
        res.json({
          status: false,
          response: errors.invalidToken
        })
      }
    } else {
      res.json({
        status: false,
        response: errors.invalidToken
      })
    }
  }
}