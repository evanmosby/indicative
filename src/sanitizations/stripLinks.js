'use strict'

const linksRegex = /<a\b[^>]*>(.*?)<\/a>/g

/**
 * Strips `a` tags = require(a given string.
 *
 * [source, js]
 * ----
 * const sanitizationRules = {
 *   message: 'strip_links'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   message: [
 *     rule('strip_links')
 *   ]
 * }
 * ----
 */
module.exports =(value) => {
  if (typeof (value) !== 'string') {
    return value
  }
  return value.replace(linksRegex, (match, group) => group.trim())
}
