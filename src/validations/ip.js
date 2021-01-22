const skippable =  require('../core/skippable')
const toPromise = require('../../lib/toPromise')
const ip = require('../raw/ip')

/**
 * Ensures the value is a valid ip address as per `ipv4` and `ipv6` specs.
 *
 * [source, js]
 * ----
 * const rules = {
 *   ip_address: 'ip'
 * }
 *
 * // or
 * const rules = {
 *   ip_address: [
 *     rule('ip')
 *   ]
 * }
 * ----
 */
module.export = (data, field, message, args, get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)

    if (!skippable(fieldValue) && !ip(fieldValue)) {
      return message
    }
  })
}
