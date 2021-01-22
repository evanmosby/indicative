const skippable =  require('../core/skippable')
const toPromise = require('../../lib/toPromise')

/**
 * Ensures the value is a valid integer. Also string representation of a number
 * will return true.
 *
 * integer(10) // true
 * integer('10') // true
 * integer('foo') // false
 *
 * [source, js]
 * ----
 * const rules = {
 *   age: 'integer'
 * }
 *
 * // or
 * const rules = {
 *   age: [
 *     rule('integer')
 *   ]
 * }
 * ----
 */
module.export = (data, field, message, args, get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && !Number.isInteger(Number(fieldValue))) {
      return message
    }
  })
}
