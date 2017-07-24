const home = require('./homeController')
const users = require('./usersController')
const article = require('./articleController')
const comment = require('./commentController')

module.exports = {
  home: home,
  users: users,
  article: article,
  comment: comment
}
