const existy = require('./existy')
module.exports = (input) => existy(input) && input !== false && input !== 0
