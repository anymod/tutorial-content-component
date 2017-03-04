'use strict'

let express     = require('express')
,   serveStatic = require('serve-static')
,   path        = require('path')
,   app = express()
,   port = process.env.PORT || 3000

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'dist') + '/index.html')
})

app.use(serveStatic(path.join(__dirname, 'dist')))

app.listen(port, () => {
  console.log('App listening on port ' + port)
})
