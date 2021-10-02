const axios = require('axios')
const cheerio = require('cheerio')
const querystring = require('querystring')

const fetchRandomWikipediaTitle = async () => {
  const languages = ['en', 'ja', 'es', 'ru', 'fr', 'de', 'it', 'pt', 'zh', 'pl', 'sv']
  const sortedLanguage = languages[Math.floor(Math.random() * languages.length)]

  const response = await axios.get(`https://${sortedLanguage}.wikipedia.org/wiki/Special:Random`)

  const $ = cheerio.load(response.data)
  const title = $('#firstHeading').text()

  return title
}

const fetchYouTubeSearchResults = async (topic) => {
  const url = `https://www.youtube.com/results?search_query=${querystring.escape(topic)}`
  const result = await axios.get(url)
  const id = result.data.match(/\"\/watch\?v=(\w+)\"/)[1]
  return id
}

module.exports = async function () {
  const wikipediaTitle = await fetchRandomWikipediaTitle()
  const videoId = await fetchYouTubeSearchResults(wikipediaTitle)

  return { videoId, wikipediaTitle }
}
