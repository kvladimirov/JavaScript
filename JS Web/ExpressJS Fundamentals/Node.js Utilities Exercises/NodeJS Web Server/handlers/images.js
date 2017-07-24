const fs = require('fs')
const url = require('url')
const database = require('../config/database')
const path = require('path')
const formidable = require('formidable')
const shortid = require('shortid')
const zlib = require('zlib')

module.exports = (req, res) => {
  req.pathname = req.pathname || url.parse(req.url).pathname

  if (req.pathname === '/images/uploaded' && req.method === 'GET') {
    let filePath = path.normalize(path.join(__dirname, '../views/uploaded-images.html'))
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err)
        res.writeHead(404, {
          'Content-Type': 'text/plain'
        })
        let readStream = fs.createReadStream('.' + req.path)
        let gzip = zlib.createGzip()
        readStream.pipe(gzip).pipe(res)

        res.write('404 not found!')
        res.end()
        return
      }

      res.writeHead(200, {
        'Content-Type': 'text/html'
      })

      let images = database.images.getAll()
      let content = ''

      for (let image of images) {
        if (!image.hasOwnProperty('private')) {
          content +=
          `<div class="image-card">
             <h2>${image.name}</h2>
             <img class="image-img" height="300" width="300" src="${image.imageUrl}">
             <a href="/images/details/${image.id}">Details</a>
           </div>`
        }
      }

      let html = data.toString().replace('{content}', content)
      res.write(html)
      res.end()
    })
  } else if (req.pathname === '/images/upload' && req.method === 'GET') {
    let filePath = path.normalize(path.join(__dirname, '../views/upload-image.html'))
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err)
        res.writeHead(404, {
          'Content-Type': 'text/plain'
        })

        res.write('Page not found!')
        res.end()
        return
      }

      res.writeHead(200, {
        'Content-Type': 'text/html'
      })

      res.write(data)
      res.end()
    })
  } else if (req.pathname === '/images/upload' && req.method === 'POST') {
    let form = new formidable.IncomingForm()
    console.log(form)
    let image = {}

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.log(err)
        return
      }

      if (!fields['name'] || !files['imageUrl']) {
        let filePath = path.normalize(path.join(__dirname, '../views/upload-error.html'))
        fs.readFile(filePath, (err, data) => {
          if (err) {
            console.log(err)
            return
          }

          res.writeHead(200, {
            'Content-Type': 'text/html'
          })

          res.write(data)
          res.end()
        })
        return
      }

      let uploadFile = files['imageUrl']
      let folder = database.images.getAll().length % 1000
      let imagePath = `/content/images/${folder}`

      if (!fs.existsSync('.' + imagePath)) {
        fs.mkdirSync('.' + imagePath)
      }

      let extension = uploadFile.name.split('.').pop()
      let uniqueId = shortid.generate()
      uploadFile.name = `${uniqueId}.${extension}`

      fs.rename(uploadFile.path, `.${imagePath}/` + uploadFile.name, err => {
        if (err) {
          console.log(err)
          return
        }

        image.name = fields.name
        image.private = fields.private
        image.imageUrl = `${imagePath}/` + uploadFile.name
        database.images.add(image)

        res.writeHead(302, {
          Location: '/images/uploaded'
        })
        res.end()
      })
    })
  } else if (req.pathname.startsWith('/images/details/') && req.method === 'GET') {
    let reqPath = req.pathname.split('/')
    let allImages = database.images.getAll()
    let image = allImages[parseInt(reqPath[reqPath.length - 1]) - 1]

    let filePath = path.normalize(path.join(__dirname, '../views/image-details.html'))
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err)
        res.writeHead(404, {
          'Content-Type': 'text/plain'
        })

        res.write('404 not found!')
        res.end()
        return
      }

      res.writeHead(200, {
        'Content-Type': 'text/html'
      })

      let content = ''
      content += `<div class="image-card">
                      <h2>${image.name}</h2>
                      <img class="image-img" height="400" width="400" src="${image.imageUrl}">
                      <a href="${image.imageUrl}">Download</a>
                  </div>`
      let html = data.toString().replace('{content}', content)

      res.write(html)
      res.end()
    })
  } else {
    return true
  }
}
