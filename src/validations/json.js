const skippable =  require('../core/skippable')
const toPromise = require('../../lib/toPromise')
const json = require('../raw/json')

/**
 * Ensures the value of field under validation is safe to be parsed
 * using `JSON.parse` method.
 *
 * [source, js]
 * ----
 * const rules = {
 *   payload: 'json'
 * }
 *
 * // or
 * const rules = {
 *   payload: [
 *     rule('json')
 *   ]
 * }
 * ----
 */
module.export = (data, field, message, args, get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)

    if (!skippable(fieldValue) && !json(fieldValue)) {
      return message
    }
  })
}
