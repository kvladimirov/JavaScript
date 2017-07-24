const handlers = require('../handlers')
const multer = require('multer')

let upload = multer({dest: './public/images'})

module.exports = (app) => {
  app.get('/', handlers.home.index)

  app.get('/category/add', handlers.category.addGet)
  app.post('/category/add', upload.single('image'), handlers.category.addPost)

  app.get('/ad/add', handlers.ad.addGet)
  app.post('/ad/add', upload.single('image'), handlers.ad.addPost)

  app.get('/:category/ads', handlers.category.adsGet)

  app.get('/ad/edit/:id', handlers.ad.editGet)
  app.post('/ad/edit/:id', upload.single('image'), handlers.ad.editPost)

  app.get('/ad/delete/:id', handlers.ad.deleteGet)
  app.post('/ad/delete/:id', handlers.ad.deletePost)
}
