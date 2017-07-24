const Category = require('../models/Category')

module.exports.addGet = (req, res) => {
  res.render('category/add')
}

module.exports.addPost = (req, res) => {
  let categoryObj = req.body

  Category.create(categoryObj).then(() => {
    res.redirect('/')
  })
}

module.exports.adsGet = (req, res) => {
  let categoryName = req.params.category

  Category.findOne({name: categoryName})
    .populate('ads')
    .then((category) => {
      res.render('category/ads', {category: category})
    })
}
