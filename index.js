'use strict'

/**
 * indicative
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const validator = require('./src/core/validator')
const sanitizor = require('./src/core/validator')
const validations = require('./src/validations')
const sanitizations = require('./src/sanitizations')
const raw = require('./src/raw')
const formatters = require('./src/formatters')
const rule = require('./src/core/rule')
const configure = require('./src/core/configure')
const config = require('./src/core/config')

/**
 * Named exports are freezed and hence we need to create
 * a copy, so that it can be extended.
 */
const rawCopy = Object.keys(raw).reduce((result, name) => {
  result[name] = raw[name]
  return result
}, {})

const validationsCopy = Object.keys(validations).reduce((result, name) => {
  result[name] = validations[name]
  return result
}, {})

const sanitizationsCopy = Object.keys(sanitizations).reduce((result, name) => {
  result[name] = sanitizations[name]
  return result
}, {})

module.exports = {
  validate: (...args) => {
    return validator(validationsCopy, config.FORMATTER || formatters.Vanilla).validate(...args)
  },
  validateAll: (...args) => {
    return validator(validationsCopy, config.FORMATTER || formatters.Vanilla).validateAll(...args)
  },
  sanitize: (...args) => {
    return sanitizor(sanitizationsCopy).sanitize(...args)
  },
  is: rawCopy,
  sanitizor: sanitizationsCopy,
  validations: validationsCopy,
  rule,
  formatters,
  configure
}
