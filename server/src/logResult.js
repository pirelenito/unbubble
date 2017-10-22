const fs = require('fs-extra')
const path = require('path')

const logPath = path.join(__dirname, '../log/results.log')
fs.ensureFileSync(logPath)

module.exports = result =>
  new Promise((resolve, reject) => {
    fs.appendFile(logPath, `${JSON.stringify(result)}\n`, function(err) {
      if (err) return reject(err)
      resolve(result)
    })
  })
