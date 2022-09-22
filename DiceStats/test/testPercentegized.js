const assert = require("chai").assert;
const percentegized = require("../script/percentegized");

describe("percentegized", ()=>{
    it("converts a number under 1 to percent", ()=>{
        assert.strictEqual(percentegized(0.2), "20%");
        assert.strictEqual(percentegized(0), "0%");
    })
        it("converts a number over 1 to string, rounded to 2 decimal places", ()=>{
        assert.strictEqual(percentegized(344.245673568679), "344.25");
    })
})
