const calcUnits = require('../../lib/calcUnits')
const isAfter = require('./after')

module.exports = (input, diffUnit, key) => {
  const expectedDate = calcUnits(diffUnit, key, '+')
  return expectedDate ? isAfter(input, expectedDate) : false
}
