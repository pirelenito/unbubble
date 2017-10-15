const axios = require('axios')
const cheerio = require('cheerio')
const querystring = require('querystring')

module.exports = function() {
  return axios
    .get('https://en.wikipedia.org/wiki/Special:Random')
    .then(response => {
      const $ = cheerio.load(response.data)
      const title = $('title')
        .text()
        .replace(' - Wikipedia', '')

      return title
    })
    .then(topic => {
      return axios.get(`https://www.youtube.com/results?search_query=${querystring.escape(topic)}`)
    })
    .then(response => {
      const $ = cheerio.load(response.data)

      const href = $('.yt-uix-tile-link')
        // this stupid map with different signature is from cheerio
        .map((index, result) => $(result).attr('href'))
        .get()
        .find(url => url.match(/watch\?/))

      return href
    })
    .then(url => `https://www.youtube.com${url}`)
}
