let env = process.env.NODE_ENV || 'development'

let config = require('./server/config/config')[env]

const app = require('express')()

require('./server/config/database.config')(config)
require('./server/config/express')(app)
require('./server/config/routes')(app)
require('./server/config/passport')()

app.listen(config.port)
console.log(`Server listening on port ${config.port}...`)
