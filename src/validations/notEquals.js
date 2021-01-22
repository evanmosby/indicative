const toPromise = require('../../lib/toPromise')
const skippable =  require('../core/skippable')

/**
 * Makes sure that the value of field under validation is not
 * same as the defined value.
 *
 * [source, js]
 * ----
 * const rules = {
 *   username: 'not_equals:root'
 * }
 *
 * // or
 * const rules = {
 *   username: [
 *     rule('not_equals', 'root')
 *   ]
 * }
 * ----
 */
module.export = (data, field, message, [targetedValue], get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && targetedValue == fieldValue) { // eslint-disable-line eqeqeq
      return message
    }
  })
}
