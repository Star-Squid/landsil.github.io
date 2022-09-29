import { assert } from "chai";
import rollDice from "../script/rollDice";

describe("rollDice", () => {
  it("returns a random result possible for a number and type of dice specified", () => {
    assert.isBelow(rollDice(1, 6), 7);
    assert.isBelow(rollDice(2, 20), 41);
    assert.equal(rollDice(0, 0), 0);
    assert.equal(rollDice(0, 50), 0);
  });
});
