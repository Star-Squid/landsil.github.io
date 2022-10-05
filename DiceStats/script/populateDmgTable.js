import webDmgRoll from "./dmgRoll.js";
import percentegized from "../script/percentegized.js";

const damageForm = document.getElementById("damage-roll");
const skillForm = document.getElementById("parameter-input");

const damageButton = document.getElementById("damage-button");
damageButton.addEventListener("click", populateDamageTable, false);

function populateDamageTable(event) {
  event.preventDefault();

  const rollResults = webDmgRoll(
    damageForm.d4.value,
    damageForm.d6.value,
    damageForm.d8.value,
    damageForm.d10.value,
    damageForm.d12.value,
    damageForm.d20.value,
    damageForm.target.value,
    skillForm.dc.value
  );

  //webDmgRoll returns {avgRoll, maxPossible, orMorePer, tOfAv,    tOfMax, percTOrMore, combined}
  document.getElementById("avg-roll").innerText =
    rollResults.avgRoll.toFixed(2);
  document.getElementById("max-possible").innerText = rollResults.maxPossible;
  document.getElementById("or-more-per").innerText = rollResults.orMorePer;
  document.getElementById("t-of-av").innerText = percentegized(
    rollResults.tOfAv
  );
  document.getElementById("t-of-max").innerText = percentegized(
    rollResults.tOfMax
  );
  document.getElementById("perc-t-or-more").innerText = percentegized(
    rollResults.percTOrMore
  );

  console.log("Damage table populated");

  return false;
}

export default populateDamageTable;
