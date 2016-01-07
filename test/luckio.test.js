var luckio = require("../src/luckio.js");
var expect = require("chai").expect;

describe("Luckio", function() {
  it("returns a function on first call", function() {
    expect(luckio(1)).to.be.a("function");
  });

  it("returns a boolean on second call", function() {
    expect(luckio(1)()).to.be.a("boolean");
  });
});
