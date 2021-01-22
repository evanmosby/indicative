const toPromise = require('../../lib/toPromise')
const skippable =  require('../core/skippable')
const between = require('../raw/between')
const isNull = require('../raw/isNull')

/**
 * Ensures the value of field under validation is under a given range. The values will
 * be cased to `Number` automatically.
 *
 * [source, js]
 * ----
 * const rules = {
 *   age: 'range:16,60'
 * }
 *
 * // or
 * const rules = {
 *   age: [
 *     rule('range', [16, 60])
 *   ]
 * }
 * ----
 */
module.export = (data, field, message, [min, max], get) => {
  return toPromise(() => {
    if ([min, max].some(value => isNull(value) || isNaN(value))) {
      return new Error('range:min and max values are required for range validation')
    }

    const fieldValue = get(data, field)

    if (!skippable(fieldValue) && !between(fieldValue, min, max)) {
      return message
    }
  })
}
