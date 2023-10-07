const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'userName is required']
  },
  mobileNumber: {
    type: String,
    required: [true, 'mobileNumber is required']
  },
  email: {
    type: String,
    required: [true, 'email is required']
  },
  address: {
    type: String,
    required: [true, 'address is required']
  },
  password: {
    type: String,
    required: [true, 'password is required']
  },
  isAdmin: {
    type: Boolean,
    enum: [0, 1],
    default: false
  },
  lang: {
    type: String,
    default: ''
  },
  incompleteOrders: [
    {
      name: {
        type: String,
        default: null
      },
      price: {
        type: Number,
        default: null
      },
      quantity: {
        type: String,
        default: null
      },
      amount: {
        type: Number,
        default: null
      },
      createdAt: {
        type: Date,
        default: null
      }
    }
  ],
  ordersHistory: [
    {
      name: {
        type: String,
        default: null
      },
      price: {
        type: Number,
        default: null
      },
      quantity: {
        type: String,
        default: null
      },
      amount: {
        type: Number,
        default: null
      },
      createdAt: {
        type: Date,
        default: null
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
})

const User = mongoose.model('User', usersSchema, 'users')

module.exports = User