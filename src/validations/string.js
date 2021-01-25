const toPromise = require('../../lib/toPromise')
const skippable =  require('../core/skippable')
const isString = require('../raw/isString')

/**
 * Ensures the value is a string
 *
 * [source, js]
 * ----
 * const rules = {
 *   bio: 'string'
 * }
 *
 * // or
 * const rules = {
 *   password_confirmation: [
 *     rule('bio', 'string')
 *   ]
 * }
 * ----
 */
module.exports = (data, field, message, args, get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && !isString(fieldValue)) {
      return message
    }
  })
}
