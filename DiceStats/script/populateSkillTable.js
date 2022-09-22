import webSkillCheck from "./skillCheck.js";
import percentegized from "../script/percentegized.js";

const skillForm = document.getElementById("parameter-input");
const skillButton = document.getElementById("skill-button");
skillButton.addEventListener('click', populateSkillTable, false);

// function dummy (event){
//   event.preventDefault()
//   console.log("dummy")
// }

function populateSkillTable(event) {
  event.preventDefault()

  const skillResults = webSkillCheck(
    skillForm.dc.value,
    skillForm.advantage.checked,
    skillForm.luck.checked,
    skillForm.elven.checked,
    skillForm.disadvantage.checked
  );

  //skillResults will be {count: [1-20], probability: [1-20], orMore: [1-20]}
  // populate the table
  for (let r = 1; r < 21; r++) {
    
    document.querySelector(".count.face" + r).innerText =
      skillResults.count[r - 1];

    document.querySelector(".probability.face" + r).innerText = 
      percentegized(skillResults.probability[r - 1]);
    
    document.querySelector(".higher.face" + r).innerText = 
      percentegized(skillResults.orMore[r - 1]);
    
  }

  //highlight target row
  document
    .querySelector("tr:nth-child(" + skillForm.dc.value + ")")
    .classList.add("highlighted");

  return false;
}

export default populateSkillTable;
