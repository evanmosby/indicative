const striptags = require('striptags')

/**
 * Strips HTML tags from a string. If value is not a string, it will be returned
 * as it is.
 *
 * [source, js]
 * ----
 * const sanitizationRules = {
 *   message: 'strip_tags'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   message: [
 *     rule('strip_tags')
 *   ]
 * }
 * ----
 *
 * Also you can pass an array of whitelisted tags.
 *
 * [source, js]
 * ----
 * const sanitizationRules = {
 *   message: 'strip_tags:a,img'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   message: [
 *     rule('strip_tags', ['a', 'img'])
 *   ]
 * }
 * ----
 */
module.exports =(value, args) => {
  if (typeof (value) !== 'string') {
    return value
  }
  return striptags(value, args)
}
