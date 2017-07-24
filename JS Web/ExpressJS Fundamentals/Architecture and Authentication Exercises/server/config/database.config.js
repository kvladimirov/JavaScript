const mongoose = require('mongoose')
const User = require('../models/User')

require('../models/Article')
require('../models/Comment')

mongoose.Promise = global.Promise

module.exports = (config) => {
  mongoose.connect(config.db)
  let db = mongoose.connection

  db.once('open', err => {
    if (err) {
      throw err
    }

    console.log('Connected!')

    User.seedAdminUser()
  })

  db.on('error', err => {
    console.log(`Database error: ${err}`)
  })
}
