const logger = require('./logger')
const router = require('./router')

module.exports = function(app) {
  logger(app)
  router(app)
}
