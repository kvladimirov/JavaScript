const fs = require('fs')
const zlib = require('zlib')

let getContentType = (url) => {
  let contentType = 'text/plain'
  if (url.endsWith('.css')) {
    contentType = 'text/css'
  } else if (url.endsWith('.html')) {
    contentType = 'text/html'
  } else if (url.endsWith('.js')) {
    contentType = 'application/javascript'
  } else if (url.endsWith('.jpg')) {
    contentType = 'image/jpeg'
  } else if (url.endsWith('.png')) {
    contentType = 'image/png'
  } else if (url.endsWith('.ico')) {
    contentType = 'image/x-icon'
  }
  return contentType
}

let validateFileExtension = (path) => {
  if (path.endsWith('.html') ||
    path.endsWith('.css') ||
    path.endsWith('.js') ||
    path.endsWith('.jpg') ||
    path.endsWith('png')) {
    return true
  }
  return false
}

module.exports = (req, res) => {
  fs.readFile('.' + req.path, (err, data) => {
    if (err ||
      req.method !== 'GET' ||
      !req.path.startsWith('/content') ||
      !validateFileExtension(req.path)) {
      res.writeHead(404)
      res.write('404 Not Found - Check your URL!')
      res.end()
      return
    } else if (req.path.endsWith('.jpg')) {
      let readStream = fs.createReadStream('.' + req.path)
      let gzip = zlib.createGzip()

      res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Content-Encoding': 'gzip',
        'Content-Disposition': 'attachment'
      })
      readStream.pipe(gzip).pipe(res)
      return
    }

    res.writeHead(200, {
      'Content-Type': getContentType(req.path)
    })

    res.write(data)
    res.end()
  })
}
