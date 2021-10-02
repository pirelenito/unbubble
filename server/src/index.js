const express = require('express')
const path = require('path')
const findRandomVideo = require('./findRandomVideo')
const logResult = require('./logResult')

const port = process.env.PORT || 3001
const app = express()

app.use(express.static(path.join(__dirname, '../../client/dist')))

app.get('/find-random-video', async function (req, res) {
  const result = await findRandomVideo()
  logResult(result)

  const { videoId } = result
  res.json({ id: videoId })
})

app.listen(port, function () {
  console.log(`Listening on port ${port}!`)
})
