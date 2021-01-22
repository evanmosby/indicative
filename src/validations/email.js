const skippable =  require('../core/skippable')
const toPromise = require('../../lib/toPromise')
const email = require('../raw/email')

/**
 * Ensures the field under validation is a valid email format.
 *
 * NOTE: This validation never checks for the existence of the email address.
 *
 * [source, js]
 * ----
 * const rules = {
 *   email: 'email'
 * }
 *
 * // or
 * const rules = {
 *   email: [
 *     rule('email')
 *   ]
 * }
 * ----
 */
module.export = (data, field, message, args, get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && !email(fieldValue)) {
      return message
    }
  })
}
