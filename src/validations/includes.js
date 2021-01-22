const toPromise = require('../../lib/toPromise')
const skippable =  require('../core/skippable')

/**
 * Ensures the value of field under validation contains a given substring.
 *
 * [source, js]
 * ----
 * const rules = {
 *   url: 'includes:adonisjs.com'
 * }
 *
 * // or
 * const rules = {
 *   url: [
 *     rule('includes', ['adonisjs.com'])
 *   ]
 * }
 * ----
 */
module.export = (data, field, message, [substring], get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && String(fieldValue).indexOf(substring) === -1) {
      return message
    }
  })
}
