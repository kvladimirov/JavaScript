const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const handlebars = require('express-handlebars')
const helpers = require('./handlebars-helpers')

module.exports = (app) => {
  app.engine('handlebars', handlebars({
    helpers: helpers,
    defaultLayout: 'main'
  }))
  app.set('view engine', 'handlebars')
  app.use(cookieParser())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(session({
    secret: 'kosyo@#$%',
    resave: false,
    saveUninitialized: false
  }))
  app.use(passport.initialize())
  app.use(passport.session())

  app.use((req, res, next) => {
    if (req.user) {
      res.locals.currentUser = req.user
      res.locals.isAdmin = req.user.roles.indexOf('Admin') >= 0
    }

    next()
  })

  app.use(express.static('public'))

  app.use((req, res, next) => {
    if (req.url.startsWith('/public')) {
      req.url = req.url.replace('/public', '')
    }

    next()
  }, express.static('public'))

  console.log('Express ready!')
}
