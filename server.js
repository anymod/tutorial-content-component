'use strict'

let express     = require('express')
,   serveStatic = require('serve-static')
,   path        = require('path')
,   app = express()

switch (process.env.NODE_ENV) {
  case 'production':
  case 'staging':
    break
  default:
    process.env.NODE_ENV = 'development'
    process.env.PORT = 3000
}

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '') + '/index.html')
})

app.use(serveStatic(path.join(__dirname, '')))

app.listen(process.env.PORT, () => {
  console.log('Example app listening on port ' + process.env.PORT)
})
