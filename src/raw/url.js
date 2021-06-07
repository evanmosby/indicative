/*
original; doesn't allow "http://hostname" or IP addresses: 
    /https?:\/\/(www\.)?([-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}|localhost)\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i
very permissive, allows basically everything except spaces: 
    /^(http|https):\/\/[^ "]+$/i
more restrictive, but also more complex and a little slower:
    /^(https?:\/\/)(\S+(?::\S*)?@)?((([1-9]\d?|1\d\d|2[01]\d|22[0-3])(\.(1?\d{1,2}|2[0-4]\d|25[0-5])){2}(\.([1-9]\d?|1\d\d|2[0-4]\d|25[0-4])))|((([a-z\u00a1-\uffff]+[0-9]+-?)*[a-z\u00a1-\uffff]+[0-9]*)(\.([a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(\.([a-z\u00a1-\uffff]{2,}))*))(:\d{2,5})?(?:\/[^\s]*)?$/ui
middle ground, allows hostname but not hostname2: 
    /https?:\/\/(www\.)?(([-a-zA-Z0-9@:%._+~#=]{1,256}(\.)?[a-z]{2,63}|localhost)|((?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3})|((?:(?:[0-9a-fA-F:]){1,4}(?:(?::(?:[0-9a-fA-F]){1,4}|:)){2,7})+))\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i
*/
const urlRegex = /^(https?:\/\/)(\S+(?::\S*)?@)?((([1-9]\d?|1\d\d|2[01]\d|22[0-3])(\.(1?\d{1,2}|2[0-4]\d|25[0-5])){2}(\.([1-9]\d?|1\d\d|2[0-4]\d|25[0-4])))|((([a-z\u00a1-\uffff]+[0-9]+-?)*[a-z\u00a1-\uffff]+[0-9]*)(\.([a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(\.([a-z\u00a1-\uffff]{2,}))*))(:\d{2,5})?(?:\/[^\s]*)?$/ui

/**
 * @description tells whether given input is a valid url
 * or not
 * @method url
 * @param  {String} input
 * @return {Boolean}
 * @example
 *   Following yields to true:
 *   http://hostname2.domain.com
 *   https://hostname2.domain.com
 *   http://dev.hostname2.domain.com
 *   http://localhost/
 *   http://hostname2
 *   http://hostname2:30080
 *   http://192.168.10.1
 *   http://hostname2.domain.com/path
 *   http://hostname2.domain.com/path?param=val#loc_anchor{some_ref}
 * 
 *   Following yields to false:
 *   http://.
 *   http://../
 *   http:///a
 *   http://-error-.invalid/
 *   http://0.0.0.0
 *   http://192.168.10.0
 *   http://10.1.1.255
 *   http://123.123.123
 *   http://.www.foo.bar/
 *   http://www.foo.bar./
 */
module.exports = (input) => urlRegex.test(input)
