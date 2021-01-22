const phoneRegex = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/
module.exports = (input) => phoneRegex.test(input)
