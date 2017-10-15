/**
 * Sagui configuration object
 * see: http://sagui.js.org/
 */
module.exports = {
  pages: ['index'],
  develop: {
    proxy: {
      '/find-random-video': {
        target: 'http://localhost:3001',
        secure: false,
      },
    },
  },
}
