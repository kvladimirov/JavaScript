let Ad = require('../models/Ad')
let Category = require('../models/Category')
let fs = require('fs')
const path = require('path')

module.exports.addGet = (req, res) => {
  Category.find().then((categories) => {
    res.render('ad/add', {categories: categories})
  })
}

module.exports.addPost = (req, res) => {
  let adObj = req.body
  adObj.image = '\\' + req.file.path

  Ad.create(adObj).then((ad) => {
    Category.findById(ad.category).then((category) => {
      category.ads.push(ad._id)
      category.save()
    })

    res.redirect('/')
  })
}

module.exports.editGet = (req, res) => {
  let id = req.params.id

  Ad.findById(id).then(ad => {
    Category.find().then(categories => {
      res.render('ad/edit', {
        ad: ad,
        categories: categories
      })
    })
  })
}

module.exports.editPost = (req, res) => {
  let id = req.params.id
  let editedAd = req.body

  Ad.findById(id).then((ad) => {
    ad.title = editedAd.title
    ad.description = editedAd.description
    ad.price = editedAd.price

    if (req.file) {
      ad.image = '\\' + req.file.path
    }

    if (ad.category.toString() !== editedAd.category) {
      Category.findById(ad.category).then((currentCategory) => {
        Category.findById(editedAd.category).then((nextCategory) => {
          let index = currentCategory.ads.indexOf(ad._id)

          if (index >= 0) {
            currentCategory.ads.splice(index, 1)
          }
          currentCategory.save()
          nextCategory.ads.push(ad._id)
          nextCategory.save()
          ad.category = editedAd.category

          ad.save().then(() => {
            res.redirect('/')
          })
        })
      })
    } else {
      ad.save().then(() => {
        res.redirect('/')
      })
    }
  })
}

module.exports.deleteGet = (req, res) => {
  let id = req.params.id
  Ad.findById(id).then(ad => {
    res.render('ad/delete', {ad: ad})
  })
}

module.exports.deletePost = (req, res) => {
  let id = req.params.id

  Ad.findById(id).then((ad) => {
    Category.findById(ad.category).then((category) => {
      let index = category.ads.indexOf(id)
      if (index >= 0) {
        category.ads.splice(index, 1)
      }
      category.save()
      Ad.remove({_id: id}).then(() => {
        fs.unlink(path.normalize(path.join('.', ad.image)), () => {
          res.redirect('/')
        })
      })
    })
  })
}
