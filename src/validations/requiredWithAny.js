const toPromise = require('../../lib/toPromise')
const empty = require('../raw/empty')
const existy = require('../raw/existy')

/**
 * Ensures the field is required when any of the other fields have non-empty values.
 *
 * [source, js]
 * ----
 * const rules = {
 *   password: 'required_with_any:username,email'
 * }
 *
 * // or
 * const rules = {
 *   password: [
 *     rule('required_with_any', ['username', 'email'])
 *   ]
 * }
 * ----
 */
module.export = (data, field, message, args, get) => {
  return toPromise(() => {
    const hasAnyField = args.some((item) => existy(get(data, item)))
    if (hasAnyField && empty(get(data, field))) {
      return message
    }
  })
}
