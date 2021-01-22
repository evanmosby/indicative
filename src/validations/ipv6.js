const skippable =  require('../core/skippable')
const toPromise = require('../../lib/toPromise')
const ipv6 = require('../raw/ipv6')

/**
 * Ensures the value is a valid ip address as per `ipv6` spec only.
 *
 * [source, js]
 * ----
 * const rules = {
 *   ip_address: 'ipv6'
 * }
 *
 * // or
 * const rules = {
 *   ip_address: [
 *     rule('ipv6')
 *   ]
 * }
 * ----
 */
module.export = (data, field, message, args, get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && !ipv6(fieldValue)) {
      return message
    }
  })
}
