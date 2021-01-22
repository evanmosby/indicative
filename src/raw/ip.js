const ipv4 = require('./ipv4')
const ipv6 = require('./ipv6')
module.exports = (input) => ipv4(input) || ipv6(input)
