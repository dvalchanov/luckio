var math = require("../src/math.js");
var expect = require("chai").expect;

describe("Math", function() {
  describe("randomNumber", function() {
    it("picks a random number within a certain range", function() {
      var min = 10;
      var max = 20;

      expect(math.randomNumber(10, 20)).to.be.within(min, max);
    });
  });

  describe("maxRange", function() {
    it("picks the maximum value for the range", function() {
      expect(math.maxRange(50)).to.be.equal(2);
    });
  });
});
