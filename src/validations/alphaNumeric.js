const skippable =  require('../core/skippable')
const toPromise = require('../../lib/toPromise')
const alphaNumeric = require('../raw/alphaNumeric')

/**
 * Makes sure the field under validation is alpha numeric only.
 * The regex used is `/^[a-z0-9]+$/i`.
 *
 * [source, js]
 * ----
 * const rules = {
 *   username: 'alpha_numeric'
 * }
 *
 * // or
 * const rules = {
 *   username: [
 *     rule('alpha_numeric')
 *   ]
 * }
 * ----
 */
module.exports = (data, field, message, args, get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && !alphaNumeric(fieldValue)) {
      return message
    }
  })
}
