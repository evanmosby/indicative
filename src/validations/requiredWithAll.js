const toPromise = require('../../lib/toPromise')
const empty = require('../raw/empty')
const existy = require('../raw/existy')

/**
 * Ensures the field is required when all other fields have non-empty values.
 *
 * [source, js]
 * ----
 * const rules = {
 *   tax_id: 'required_with_all:car,house'
 * }
 *
 * // or
 * const rules = {
 *   tax_id: [
 *     rule('required_with_all', ['car', 'house'])
 *   ]
 * }
 * ----
 */
module.exports = (data, field, message, args, get) => {
  return toPromise(() => {
    const missingAnyField = args.some((item) => !existy(get(data, item)))
    if (!missingAnyField && empty(get(data, field))) {
      return message
    }
  })
}
