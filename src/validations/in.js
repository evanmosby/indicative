const skippable =  require('../core/skippable')
const toPromise = require('../../lib/toPromise')
const inArray = require('../raw/inArray')

/**
 * Ensures the value of a given field matches one of expected values.
 *
 * [source, js]
 * ----
 * const rules = {
 *   post_type: 'in:draft,published'
 * }
 *
 * // or
 * const rules = {
 *   post_type: [
 *     rule('in', ['draft', 'published'])
 *   ]
 * }
 * ----
 */
module.export = (data, field, message, args, get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && !inArray(fieldValue, args)) {
      return message
    }
  })
}
