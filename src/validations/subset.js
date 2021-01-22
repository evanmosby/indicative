const toPromise = require('../../lib/toPromise')
const isString = require('../raw/isString')
const subset = require('../raw/subset')
const skippable =  require('../core/skippable')

/**
 * Ensures the value of a given field is a subset of expected values.
 *
 * [source, js]
 * ----
 * const rules = {
 *   include: 'subset:foo,bar,baz'
 * }
 *
 * // or
 * const rules = {
 *   include: [
 *     rule('subset', ['foo', 'bar', 'baz'])
 *   ]
 * }
 * ----
 */
module.export = (data, field, message, args, get) => {
  return toPromise(() => {
    let fieldValue = get(data, field)

    if (isString(fieldValue)) {
      fieldValue = fieldValue.split(',').map(val => val.trim())
    } else if (!Array.isArray(fieldValue)) {
      throw new TypeError('subset:field value must be a comma delimited string or an array')
    }

    if (!skippable(fieldValue) && !subset(fieldValue, args)) {
      return message
    }
  })
}
