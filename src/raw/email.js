const isEmail = require('validator/lib/isEmail')
module.exports = (input, options) => isEmail(String(input), options)
