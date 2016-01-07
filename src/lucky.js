/**
 * Dependencies
 */
var math = require("./math");

/**
 * Lucky number constructor.
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

console.log(lucky(50)());
