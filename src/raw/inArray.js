module.exports = (input, dict) => {
  return typeof (dict.indexOf) === 'function'
    ? dict.indexOf(input) > -1
    : false
}
