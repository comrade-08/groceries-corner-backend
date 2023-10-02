const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        enum: [0, 1],
        default: false
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