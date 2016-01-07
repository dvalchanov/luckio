var lucky = require("../src/lucky.js");
var expect = require("chai").expect;

describe("Lucky", function() {
  it("returns a function on first call", function() {
    expect(lucky(1)).to.be.a("function");
  });

  it("returns a boolean on second call", function() {
    expect(lucky(1)()).to.be.a("boolean");
  });
});
