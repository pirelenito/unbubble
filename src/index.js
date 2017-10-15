const express = require('express')
const findRandomVideo = require('./findRandomVideo')

const app = express()

app.get('/', function(req, res) {
  findRandomVideo().then(url => res.json({ url: url }))
})

app.listen(3000, function() {
  console.log('Listening on port 3000!')
})
