/**
 * Dependencies
 */
var math = require("./math");

/**
 * Pick a lucky number and return a function that matches its picked lucky number
 * to the initial one. If equal it will return `true`, if not `false`.
 *
 * @param {Number} chance Lucky chance to pick a number
 * @returns {Function}
 */
function lucky(chance) {
  var min = 1;
  var max = math.maxRange(chance);
  var luckyNumber = math.randomNumber(this._min, this._max);

  return function() {
    if (math.randomNumber(this._min, this._max) === luckyNumber) return true;
    return false;
  }
}

/**
 * Main export.
 */
module.exports = lucky;
