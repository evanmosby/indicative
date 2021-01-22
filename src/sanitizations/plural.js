const pluralize = require('pluralize')

/**
 * Converts a value to it's plural version. If value is not a string
 * then it will return as it is.
 *
 * [source, js]
 * ----
 * const sanitizationRules = {
 *   controllerName: 'plural'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   controllerName: [
 *     rule('plural')
 *   ]
 * }
 * ----
 */
module.exports =(value) => {
  if (typeof (value) !== 'string') {
    return value
  }
  return pluralize(value)
}
