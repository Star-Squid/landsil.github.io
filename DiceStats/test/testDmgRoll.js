// const assert = require('assert'); //default
const assert = require("chai").assert;
const webDmgRoll = require("../script/dmgRoll.js");

describe("webDmgRoll", function () {
  it("returns an object", function () {
    assert.isObject(webDmgRoll());
  });
  it("returns maxPossible adding max possible results of chosen dice", function () {
    assert.equal(webDmgRoll(0, 0, 3, 0, 0, 0, 10, 5).maxPossible, 24);
    assert.equal(webDmgRoll(0, 2, 3, 0, 0, 0, 10, 5).maxPossible, 36);
  });

  it("returns avgRoll with average result from chosen dice", function () {
    assert.isAbove(
      +webDmgRoll(0, 0, 3, 0, 0, 0, 10, 5).avgRoll,
      12,
      "too small, expected to be 13 or 14"
    );
    assert.isBelow(
      +webDmgRoll(0, 0, 3, 0, 0, 0, 10, 5).avgRoll,
      15,
      "too large, expected to be 13 or 14"
    );
  });
});

//example test using browser?
//result so far: browser is not defined
// describe("dummy", function () {
//   it("accepts the customer name", () => {
//     const name = "Hungry Person";

//     browser.url("/");
//     browser.setValue("#name", name);
//     browser.click("#submit-order");
//     browser.url("/");

//     assert.include(browser.getText("#deliver-to"), name);
//   });
// });
