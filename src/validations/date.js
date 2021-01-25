const toPromise = require('../../lib/toPromise')
const skippable =  require('../core/skippable')
const date = require('../raw/date')

/**
 * Ensures the field under validation is a valid date. The value can be a
 * date object or a valid date string.
 *
 * If value is a string, it will be processed using `new Date(givenString)`.
 *
 * [source, js]
 * ----
 * const rules = {
 *   login_at: 'date'
 * }
 *
 * // or
 * const rules = {
 *   login_at: [
 *     rule('date')
 *   ]
 * }
 * ----
 */
module.exports = (data, field, message, args, get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && !date(fieldValue, false)) {
      return message
    }
  })
}
