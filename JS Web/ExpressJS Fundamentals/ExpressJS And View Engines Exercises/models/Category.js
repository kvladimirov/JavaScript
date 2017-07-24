const mongoose = require('mongoose')

let categorySchema = mongoose.Schema({
  name: {type: mongoose.Schema.Types.String, required: true},
  ads: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ad'}]
})

let Category = mongoose.model('Category', categorySchema)

module.exports = Category
