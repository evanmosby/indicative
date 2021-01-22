const isCreditCard = require('validator/lib/isEmail')
module.exports = (input, options) => isCreditCard(String(input), options)
