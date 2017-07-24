const mongoose = require('mongoose')

let adSchema = mongoose.Schema({
  title: {type: mongoose.Schema.Types.String, required: true},
  description: {type: mongoose.Schema.Types.String, required: true},
  price: {type: mongoose.Schema.Types.Number, min: 0, max: Number.MAX_VALUE, default: 0},
  image: {type: mongoose.Schema.Types.String},
  category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
})

let Ad = mongoose.model('Ad', adSchema)

module.exports = Ad
