const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subcategory: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: String,
    required: true
  },
  weight: {
    type: [String],
    required: true
  },
  img: {
    type: String,
    required: true
  },
  instock: {
    type: Boolean,
    default: true
  },
  desc: {
    type: String,
    required: true
  },
  coupon: {
    type: String,
    required: true
  },
  offer: {
    type: String,
    required: true
  },
  delivery_info: {
    type: [String],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('products', productSchema);