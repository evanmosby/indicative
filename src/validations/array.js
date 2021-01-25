const skippable =  require('../core/skippable')
const toPromise = require('../../lib/toPromise')

/**
 * Ensure the value is a valid array. Also this validation will never
 * validate the size of array.
 *
 * [source, js]
 * ----
 * const rules = {
 *   whiteListedUrls: 'array'
 * }
 *
 * // or
 * const rules = {
 *   whiteListedUrls: [
 *     rule('array')
 *   ]
 * }
 * ----
 */
module.exports = (data, field, message, args, get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && !Array.isArray(fieldValue)) {
      return message
    }
  })
}
