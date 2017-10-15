const express = require('express')
const path = require('path')
const findRandomVideo = require('./findRandomVideo')

const port = process.env.PORT || 3001
const app = express()

app.use(express.static(path.join(__dirname, '../../client/dist')))

app.get('/find-random-video', function(req, res) {
  findRandomVideo().then(id => res.json({ id: id }))
})

app.listen(port, function() {
  console.log(`Listening on port ${port}!`)
})
