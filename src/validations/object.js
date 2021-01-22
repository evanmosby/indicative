const skippable =  require('../core/skippable')
const toPromise = require('../../lib/toPromise')
const isObject = require('../raw/isObject')

/**
 * Ensures the value of field under validation is a valid Javascript
 * object.
 *
 * The validation will fail for `Arrays`, though they are objects too in Javascript.
 *
 * [source, js]
 * ----
 * const rules = {
 *   user: 'object'
 * }
 *
 * // or
 * const rules = {
 *   user: [
 *     rule('object')
 *   ]
 * }
 * ----
 */
module.export = (data, field, message, args, get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && !isObject(fieldValue)) {
      return message
    }
  })
}
