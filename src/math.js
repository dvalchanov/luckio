/**
 * Get a random number in the provided range.
 *
 * @param   {Number} min Start of the range
 * @param   {Number} max End of the range
 * @returns {Number}
 */
exports.randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * A maximum range in which the numbers can be given
 * a certain chance to be picked.
 *
 * @param   {Number} percentage Chance to be picked
 * @returns {Number}
 */
exports.maxRange = function(chance) {
  return Math.round(100 / chance);
}
