const toPromise = require('../../lib/toPromise')
const empty = require('../raw/empty')
const existy = require('../raw/existy')

/**
 * Ensures the field is required when all of the other fields has empty values.
 *
 * [source, js]
 * ----
 * const rules = {
 *   email: 'required_without_any:username,account_id'
 * }
 *
 * // or
 * const rules = {
 *   email: [
 *     rule('required_without_any', ['username', 'account_id'])
 *   ]
 * }
 * ----
 */
module.exports = (data, field, message, args, get) => {
  return toPromise(() => {
    const hasAnyField = args.some((item) => !existy(get(data, item)))
    if (hasAnyField && empty(get(data, field))) {
      return message
    }
  })
}
