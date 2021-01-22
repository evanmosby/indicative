module.exports = (input, superset) => {
  if (!Array.isArray(input) || !Array.isArray(superset)) {
    return false
  }
  return input.every(element => superset.includes(element))
}
