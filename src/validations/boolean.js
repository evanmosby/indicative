const skippable =  require('../core/skippable')
const toPromise = require('../../lib/toPromise')
const boolean = require('../raw/boolean')

/**
 * Ensures the value of a field is a boolean. Also it will cast following
 * strings to their boolean counter parts.
 *
 * [source, plain]
 * ----
 * '0' -> 0
 * '1' -> 1
 * 'true' -> true
 * 'false' -> false
 * ----
 *
 * [source, js]
 * ----
 * const rules = {
 *   remember_me: 'boolean'
 * }
 *
 * // or
 * const rules = {
 *   remember_me: [
 *     rule('boolean')
 *   ]
 * }
 * ----
 */
module.export = (data, field, message, args, get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && !boolean(fieldValue, false)) {
      return message
    }
  })
}
