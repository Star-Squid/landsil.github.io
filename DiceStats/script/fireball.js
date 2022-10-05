import webDmgRoll from "./dmgRoll.js";
import percentegized from "../script/percentegized.js";

const damageForm = document.getElementById("damage-roll");
// const skillForm = document.getElementById("parameter-input");

const fireballButton = document.getElementById("fireball-button");
fireballButton.addEventListener("click", fireball, false);

function fireball(event) {
  event.preventDefault();

  const rollResults = webDmgRoll(
    0,
    0,
    1,
    0,
    0,
    0,
    damageForm.target.value,
    0
  );

  //webDmgRoll returns {avgRoll, maxPossible, orMorePer, tOfAv,    tOfMax, percTOrMore, combined}
  document.getElementById("avg-roll").innerText = rollResults.avgRoll.toFixed(2);
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

  console.log("Damage table populated - fireball!");

  return false;
}


export default fireball;
