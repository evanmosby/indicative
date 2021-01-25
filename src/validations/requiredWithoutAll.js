const toPromise = require('../../lib/toPromise')
const empty = require('../raw/empty')
const existy = require('../raw/existy')

/**
 * Ensures the field is required when all of the other fields has empty values.
 *
 * [source, js]
 * ----
 * const rules = {
 *   zipcode: 'required_without_all:address,state'
 * }
 *
 * // or
 * const rules = {
 *   zipcode: [
 *     rule('required_without_all', ['address', 'state'])
 *   ]
 * }
 * ----
 */
module.exports = (data, field, message, args, get) => {
  return toPromise(() => {
    const hasAnyField = args.some((item) => existy(get(data, item)))
    if (!hasAnyField && empty(get(data, field))) {
      return message
    }
  })
}
