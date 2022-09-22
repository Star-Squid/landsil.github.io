const webDmgRoll = require("./dmgRoll");
const populateDamageTable = require("./populateDmgTable");

const damageForm = document.getElementById("damage-roll");
const diceForm = document.getElementById("parameter-input");

function fireball() {
  function populateDamageTable() {
    webDmgRoll(0, 0, 8, 0, 0, 0, damageForm.target.value, diceForm.dc.value);

    damageForm.d6.value = 8;
    return false;
  }
}

module.exports = fireball;
