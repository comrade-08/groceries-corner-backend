const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  price: {
    type: Number,
    required: [true, 'price is required']
  },
  stock: {
    type: Number,
    required: [true, 'stock is required']
  },
  keywords: [
    {
      type: String,
      default: ''
    }
  ],
  ratings: {
    type: Number,
    default: 0
  },
  ratedBy: [
    {
      userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
      },
      rating: {
        type: Number,
        default: 0
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

const Product = mongoose.model('Product', productsSchema, 'products')

module.exports = Product