const slug = require('@slynova/slug')

/**
 * Converts a string to URL friendly slug. If value is not a string, it will be
 * returned as it is.
 *
 * Also it will handle ascii charmaps and converts to their utf-8 counter parts.
 *
 * [source, text]
 * ----
 * I am > than you
 * ----
 *
 * will become
 *
 * [source, text]
 * ----
 * i-am-greater-than-you
 * ----
 *
 * [source, js]
 * ----
 * const sanitizationRules = {
 *   slug: 'slug'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   slug: [
 *     rule('slug')
 *   ]
 * }
 * ----
 */
module.exports =(value) => {
  if (typeof (value) !== 'string') {
    return value
  }
  return slug(value)
}
