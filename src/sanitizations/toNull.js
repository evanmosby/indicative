const existy = require('../raw/existy')

/**
 * Converts empty strings and `undefined` to `null`. It is
 * handy to keep data normalized at database level.
 *
 * [source, js]
 * ----
 * const sanitizationRules = {
 *   bio: 'to_null'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   bio: [
 *     rule('to_null')
 *   ]
 * }
 * ----
 */
module.exports =(value) => {
  if (!existy(value)) {
    return null
  }
  return value
}
