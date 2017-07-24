const homePageHandler = require('./home-page')
const faviconHandler = require('./favicon')
const imagesPageHandler = require('./images')
const statusPageHandler = require('./status')
const staticFilesHandler = require('./static-files')

module.exports = [
  statusPageHandler,
  homePageHandler,
  faviconHandler,
  imagesPageHandler,
  staticFilesHandler
]
