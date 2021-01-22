module.exports = (input, intersectionArray) => {
  if (!Array.isArray(input) || !Array.isArray(intersectionArray)) {
    return false
  }
  return input.filter((n) => intersectionArray.indexOf(n) > -1).length === input.length
}
