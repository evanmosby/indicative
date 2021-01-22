const alphaNumericRegex = /^[a-z0-9]+$/i
module.exports = (input) => alphaNumericRegex.test(input)
