const skippable =  require('../core/skippable')
const toPromise = require('../../lib/toPromise')
const ipv4 = require('../raw/ipv4')

/**
 * Ensures the value is a valid ip address as per `ipv4` spec only.
 *
 * [source, js]
 * ----
 * const rules = {
 *   ip_address: 'ipv4'
 * }
 *
 * // or
 * const rules = {
 *   ip_address: [
 *     rule('ipv4')
 *   ]
 * }
 * ----
 */
module.export = (data, field, message, args, get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && !ipv4(fieldValue)) {
      return message
    }
  })
}
