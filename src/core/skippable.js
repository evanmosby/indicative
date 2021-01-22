const config = require('./config')
const existy = require('../raw/existy')

module.exports = (value) => {
  return config.EXISTY_STRICT ? value === undefined : !existy(value)
}
