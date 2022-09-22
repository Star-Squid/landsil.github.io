const assert = require("chai").assert;
const webSkillCheck = require("../script/skillCheck");

describe("webSkillCheck", ()=>{
    it("returns an object of 3 20-item arrays", ()=>{
        assert.strictEqual(webSkillCheck(10, true, true, true, false), "20%");
        assert.strictEqual(webSkillCheck(5, true, false, true, false), "0%");
    })
        it("has sth special in forst array", ()=>{
        assert.strictEqual(webSkillCheck(10, true, true, true, false)[0], [1, 3]);
    })
})
