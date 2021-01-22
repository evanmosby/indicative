const toPromise = require('../../lib/toPromise')
const skippable =  require('../core/skippable')
const existy = require('../raw/existy')

/**
 * Ensures the value of 2 fields are same.
 *
 * [source, js]
 * ----
 * const rules = {
 *   password_confirmation: 'same:password'
 * }
 *
 * // or
 * const rules = {
 *   password_confirmation: [
 *     rule('same', ['password'])
 *   ]
 * }
 * ----
 */
module.export = (data, field, message, [targetedField], get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    const targetedFieldValue = get(data, targetedField)

    if (!skippable(fieldValue) && existy(targetedFieldValue) && targetedFieldValue !== fieldValue) {
      return message
    }
  })
}
