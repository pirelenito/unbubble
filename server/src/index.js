const express = require('express')
const findRandomVideo = require('./findRandomVideo')

const app = express()

app.get('/find-random-video', function(req, res) {
  findRandomVideo().then(id => res.json({ id: id }))
})

app.listen(3001, function() {
  console.log('Listening on port 3001!')
})
