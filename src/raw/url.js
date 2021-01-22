const urlRegex = /https?:\/\/(www\.)?(([-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}|localhost)|((?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3})|((?:(?:[0-9a-fA-F:]){1,4}(?:(?::(?:[0-9a-fA-F]){1,4}|:)){2,7})+))\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i
 

/**
 * @description tells whether given input is a valid url
 * or not
 * @method url
 * @param  {String} input
 * @return {Boolean}
 * @example
 *   Following yields to true
 *   http://foo.com
 *   https://foo.com
 *   http://localhost
 *   http://foo.co.in
 */
module.exports = (input) => urlRegex.test(input)
