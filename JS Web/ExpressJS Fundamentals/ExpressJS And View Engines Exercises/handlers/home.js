let Category = require('../models/Category')

module.exports.index = (req, res) => {
  Category.find().then((categories) => {
    res.render('home/index', {categories: categories})
  })
}
