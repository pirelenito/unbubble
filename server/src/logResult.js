const fs = require('fs-extra')
const path = require('path')

const logPath = path.join(__dirname, '../log/results.log')
fs.ensureFileSync(logPath)

module.exports = result =>
  new Promise((resolve, reject) => {
    const resultWithTimestamp = Object.assign({}, result, { timestamp: Date.now() })
    fs.appendFile(logPath, `${JSON.stringify(resultWithTimestamp)}\n`, function(err) {
      if (err) return reject(err)
      resolve(result)
    })
  })
