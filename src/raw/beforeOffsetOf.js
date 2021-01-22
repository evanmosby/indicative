const calcUnits = require('../../lib/calcUnits')
const isBefore = require('./before')

module.exports = (input, diffUnit, key) => {
  const expectedDate = calcUnits(diffUnit, key, '-')
  return expectedDate ? isBefore(input, expectedDate) : false
}
