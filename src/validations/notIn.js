const skippable =  require('../core/skippable')
const toPromise = require('../../lib/toPromise')
const inArray = require('../raw/inArray')

/**
 * Makes sure that the value of field under validation is not
 * from one of the defined values.
 *
 * [source, js]
 * ----
 * const rules = {
 *   username: 'not_in:root,admin,super'
 * }
 *
 * // or
 * const rules = {
 *   username: [
 *     rule('not_in', ['root', 'admin', 'super'])
 *   ]
 * }
 * ----
 */
module.exports = (data, field, message, args, get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && inArray(fieldValue, args)) {
      return message
    }
  })
}
