const express = require('express')
const path = require('path')
const findRandomVideo = require('./findRandomVideo')
const logResult = require('./logResult')

const port = process.env.PORT || 3001
const app = express()

app.use(express.static(path.join(__dirname, '../../client/dist')))

app.get('/find-random-video', function(req, res) {
  findRandomVideo()
    .then(logResult)
    .then(({ videoId }) => res.json({ id: videoId }))
    .catch(err => res.status(500).send(err.message))
})

app.listen(port, function() {
  console.log(`Listening on port ${port}!`)
})
