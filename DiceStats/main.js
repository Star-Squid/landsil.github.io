const skillForm = document.getElementById("parameter-input");

//uncheck advantage fields on the form when a disadvantage is clicked and vice versa
function checkAdvantage(element) {
  if (element.classList.contains("dis")) {
    var allAdv = document.getElementsByClassName("adv");

    for (var i = 0; i < allAdv.length; i++) {
      allAdv[i].checked = false;
    }
  } else if (element.classList.contains("adv")) {
    var allDis = document.getElementsByClassName("dis");

    for (var i = 0; i < allDis.length; i++) {
      allDis[i].checked = false;
    }
  }

  //ticking elven ticks advantage as well
  if (element.id === "elven") {
    document.querySelector("#advantage").checked = true;
  }

  //unticking advantage unticks elven
  if (document.querySelector("#advantage").checked === false) {
    document.querySelector("#elven").checked = false;
  }

  // console.log("clicked: " + element.id + ", advantage: " + document.querySelector("#advantage").checked + ", elven: " + document.querySelector("#elven").checked)
}

// function populateTable() {
//   webSkillCheck(
//     skillForm.dc.value,
//     skillForm.advantage.checked,
//     skillForm.luck.checked,
//     skillForm.elven.checked,
//     skillForm.disadvantage.checked
//   );
// //don't just do this, use return values
//   return false;
// }

//highlight target row
// function highlightTarget(skillTarget) {
//   document
//     .querySelector("tr:nth-child(" + skillTarget + ")")
//     .classList.add("highlighted");
// }
