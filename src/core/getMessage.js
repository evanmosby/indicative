/*
* indicative
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { pope } from 'pope'

/**
 * Returns message for a given field and a validation rule. The priority is
 * defined as follows in order from top to bottom.
 *
 * 1. Message for `field.validation`
 * 2. Message for validation
 * 3. Default message
 *
 * ### Templating
 * Support dynamic placeholders in messages as shown below.
 *
 * ```
 * {{ validation }} validation failed on {{ field }}
 * ```
 * 1. validation - Validation name
 * 2. field - Field under validation
 * 3. argument - An array of values/args passed to the validation.
 *
 * ### Closure
 * Also you can define a closure for a message, which receives
 * following arguments.
 *
 * ```
 * required: function (field, validation, args) {
 *  return `${validation} failed on ${field}`
 * }
 * ```
 *
 * @method getMessage
 *
 * @param {Object} messages
 * @param {String} field
 * @param {String} validation
 * @param {Array}  args
 *
 * @returns String
 */
function getMessage (messages, field, validation, args) {
  /**
   * Since we allow array expression as `*`, we want all index of the
   * current field to be replaced with `.*`, so that we get the
   * right message.
   */
  field = field.replace(/\.\d/g, '.*')

  const message = messages[`${field}.${validation}`] || messages[validation] || '{{validation}} validation failed on {{ field }}'
  return typeof (message) === 'function'
  ? message(field, validation, args)
  : pope(message, { field, validation: validation, argument: args })
}

export default getMessage