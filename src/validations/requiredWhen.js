const toPromise = require('../../lib/toPromise')
const empty = require('../raw/empty')

/**
 * The field is checked for required validation, when expected field value is same
 * as the expected value.
 *
 * `{}`, `[]`, `''`, `null`, `undefined` are considered as empty values.
 *
 * [source, js]
 * ----
 * const rules = {
 *   state: 'required_when:country,US'
 * }
 *
 * // or
 * const rules = {
 *   state: [
 *     rule('required_when', ['country', 'US'])
 *   ]
 * }
 * ----
 */
module.exports = function (data, field, message, [otherField, expectedValue], get) {
  return toPromise(() => {
    const otherValue = get(data, otherField)
    if (String(expectedValue) === String(otherValue) && empty(get(data, field))) {
      return message
    }
  })
}
