const controllers = require('../controllers')
const auth = require('./auth')
const multer = require('multer')

let upload = multer({dest: './public/images'})

module.exports = (app) => {
  app.get('/', controllers.home.index)

  app.get('/users/register', controllers.users.registerGet)
  app.post('/users/register', controllers.users.registerPost)
  app.get('/users/login', controllers.users.loginGet)
  app.post('/users/login', controllers.users.loginPost)
  app.post('/users/logout', controllers.users.logout)

  app.get('/add', auth.isAuthenticated, controllers.image.addGet)
  app.post('/add', auth.isAuthenticated, upload.single('image'), controllers.image.addPost)
  app.get('/tag/:tagName', controllers.image.showByTag)
  app.post('/like/:id', auth.isAuthenticated, controllers.image.like)
  app.post('/dislike/:id', auth.isAuthenticated, controllers.image.dislike)
  app.get('/admins/add', auth.isInRole('Admin'), controllers.users.addAdminGet)
  app.post('/admins/add', auth.isInRole('Admin'), controllers.users.addAdminPost)
  app.get('/admins/all', auth.isInRole('Admin'), controllers.users.all)
  app.get('/profile/:username', auth.isAuthenticated, controllers.users.profile)
  app.get('/edit/:id', auth.isInRole('Admin'), controllers.image.editGet)
  app.post('/edit/:id', auth.isInRole('Admin'), upload.single('image'), controllers.image.editPost)
  app.get('/delete/:id', auth.isInRole('Admin'), controllers.image.deleteGet)
  app.post('/delete/:id', auth.isInRole('Admin'), controllers.image.deletePost)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}
