const toPromise = require('../../lib/toPromise')
const skippable =  require('../core/skippable')
const isNumber = require('../raw/isNumber')

/**
 * Makes sure that the value of field under validation is a valid
 * number. The validation will pass for floats too, since it uses `typeof` internally.
 *
 * For strict integers, you must use the link:integer[integer] rule.
 *
 * [source, js]
 * ----
 * const rules = {
 *   game_points: 'number'
 * }
 *
 * // or
 * const rules = {
 *   game_points: [
 *     rule('number')
 *   ]
 * }
 * ----
 */
module.exports = (data, field, message, args, get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    const transformedValue = typeof (fieldValue) === 'string' ? Number(fieldValue) : fieldValue

    if (!skippable(fieldValue) && !isNumber(transformedValue)) {
      return message
    }
  })
}
