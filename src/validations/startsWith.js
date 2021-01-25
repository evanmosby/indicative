const toPromise = require('../../lib/toPromise')
const skippable =  require('../core/skippable')

/**
 * Ensure the value of field under validation starts with a certain substr. This
 * validation will also trim whitespaces before making the check
 *
 * [source, js]
 * ----
 * const rules = {
 *   phone_no: 'starts_with:99'
 * }
 *
 * // or
 * const rules = {
 *   phone_no: [
 *     rule('starts_with', 99)
 *   ]
 * }
 * ----
 */
module.exports = (data, field, message, [substring], get) => {
  return toPromise(() => {
    if (!substring) {
      throw new Error('startsWith:make sure to define the matching substring')
    }

    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && String(fieldValue).trim().substr(0, substring.length) !== String(substring)) {
      return message
    }
  })
}
