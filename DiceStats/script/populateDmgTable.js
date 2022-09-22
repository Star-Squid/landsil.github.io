const webDmgRoll = require("/dmgRoll.js");

const damageForm = document.getElementById("damage-roll");
const diceForm = document.getElementById("parameter-input");

function populateDamageTable() {
  const rollResults = webDmgRoll(
    damageForm.d4.value,
    damageForm.d6.value,
    damageForm.d8.value,
    damageForm.d10.value,
    damageForm.d12.value,
    damageForm.d20.value,
    damageForm.target.value,
    diceForm.dc.value
  );

  // rollResults returns avgRoll, maxPossible, orMorePer, tOfAv, tOfMax, percTOrMore, combined
  document.getElementById("avg-roll").innerText = rollResults.avgRoll;
  document.getElementById("max-possible").innerText = rollResults.maxPossible;
  document.getElementById("or-more-per").innerText = rollResults.orMorePer;
  document.getElementById("t-of-av").innerText = rollResults.tOfAv;
  document.getElementById("t-of-max").innerText = rollResults.tOfMax;

  return false;
}

module.exports = populateDamageTable;
