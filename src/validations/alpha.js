const skippable =  require('../core/skippable')
const toPromise = require('../../lib/toPromise')
const alpha = require('../raw/alpha')

/**
 * Makes sure the field under validation is alpha only. The regex used is `/^[a-z]+$/i`.
 *
 * [source, js]
 * ----
 * const rules = {
 *   username: 'alpha'
 * }
 *
 * // or
 * const rules = {
 *   username: [
 *     rule('alpha')
 *   ]
 * }
 * ----
 */
module.exports = (data, field, message, args, get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && !alpha(fieldValue)) {
      return message
    }
  })
}
