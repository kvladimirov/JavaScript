const url = require('url')
const fs = require('fs')
const path = require('path')
const database = require('../config/database')

module.exports = (req, res) => {
  req.pathname = req.pathname || url.parse(req.url).pathname
  let statusHeader = req.headers['statusheader']

  if (statusHeader && statusHeader === 'Full') {
    let filePath = path.normalize(path.join(__dirname, '../views/status.html'))
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err)
        res.writeHead(404)
        res.write('404 Not Found')
        res.end()
      }

      res.writeHead(200, {
        'Content-Type': 'text/html'
      })

      let imagesCount = database.images.getAll().length
      data = data.toString().replace('{content}', `The web server contain ${imagesCount} images.`)
      res.write(data)
      res.end()
    })
  } else {
    return true
  }
}
