const homeHandler = require('./home')
const categoryHandler = require('./category')
const adHandler = require('./ad')

module.exports = {
  home: homeHandler,
  category: categoryHandler,
  ad: adHandler
}
