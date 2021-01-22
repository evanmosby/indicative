const ipv6Regex = /^(?:(?:[0-9a-fA-F:]){1,4}(?:(?::(?:[0-9a-fA-F]){1,4}|:)){2,7})+$/
module.exports = (input) => ipv6Regex.test(input)
