/**
 * Tells if `input` is greator than `comparsionInput`. If strings are
 * passed, they will be converted to number.
 *
 * @method above
 *
 * @param  {Number|String} input
 * @param  {Number|String} comparsionInput
 *
 * @return {Boolean}
 */
module.exports = (input, comparsionInput) => Number(input) > Number(comparsionInput)
