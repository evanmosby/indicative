const toPromise = require('../../lib/toPromise')
const skippable =  require('../core/skippable')
const isAbove = require('../raw/above')

/**
 * Makes sure the value provided by the end user is above the
 * expected value.
 * This method will wrap both the values inside the `Number` function.
 *
 * [source, js]
 * ----
 * const rules = {
 *   age: 'above:20'
 * }
 *
 * // or
 * const rules = {
 *   age: [
 *     rule('above', 20)
 *   ]
 * }
 * ----
 */
module.export = (data, field, message, [minValue], get) => {
  return toPromise(() => {
    if (!minValue) {
      return new Error('above:make sure to define minValue')
    }

    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && !isAbove(fieldValue, minValue)) {
      return message
    }
  })
}
