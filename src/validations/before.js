const toPromise = require('../../lib/toPromise')
const skippable =  require('../core/skippable')
const before = require('../raw/before')

/**
 * Ensures the value of field under validation is before a given
 * date.
 *
 * This method will const link:https://date-fns.org/v1.29.0/docs/isBefore[isBefore] method from date-fns.
 *
 * [source, js]
 * ----
 * const rules = {
 *   confCall: 'before:2018-11-20'
 * }
 *
 * // or
 * const rules = {
 *   confCall: [
 *     rule('before', new Date().setDate(new Date().getMonth() + 12))
 *   ]
 * }
 * ----
 */
module.export = (data, field, message, [beforeDate], get) => {
  return toPromise(() => {
    if (!beforeDate) {
      return new Error('before:make sure to define the before date')
    }

    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && !before(fieldValue, beforeDate)) {
      return message
    }
  })
}
