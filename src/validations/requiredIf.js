const toPromise = require('../../lib/toPromise')
const empty = require('../raw/empty')
const existy = require('../raw/existy')

/**
 * The field is checked for required validation, when expected field exists or
 * the value of expected field is equal to given value.
 *
 * [source, js]
 * ----
 * const rules = {
 *   address: 'required_if:needs_delivery',
 *   credit_card_number: 'required_if:payment_type,cc'
 * }
 *
 * // or
 * const rules = {
 *   address: [
 *     rule('required_if', 'needs_delivery')
 *   ],
 *   credit_card_number: [
 *     rule('required_if', ['payment_type', 'cc'])
 *   ],
 * }
 * ----
 */
module.exports = (data, field, message, [whenField, targetValue], get) => {
  return toPromise(() => {
    const whenFieldValue = get(data, whenField)
    const fieldValue = get(data, field)
    if (existy(whenFieldValue) && empty(fieldValue) && (!existy(targetValue) || whenFieldValue == targetValue)) { // eslint-disable-line eqeqeq
      return message
    }
  })
}
