const toPromise = require('../../lib/toPromise')
const skippable = require('../core/skippable')
const after = require('../raw/after')

/**
 * Ensures the value of the field is after the expected
 * date.
 *
 * This method will const link:https://date-fns.org/docs/isAfter[isAfter] function of date-fns.
 *
 * [source, js]
 * ----
 * const rules = {
 *   confCall: `after:`${new Date()}
 * }
 *
 * // or
 * const rules = {
 *   confCall: [
 *     rule('after', new Date())
 *   ]
 * }
 * ----
 */
module.exports = (data, field, message, [afterDate], get) => {
  return toPromise(() => {
    if (!afterDate) {
      return new Error('after:make sure to define the after date')
    }

    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && !after(fieldValue, afterDate)) {
      return message
    }
  })
}
