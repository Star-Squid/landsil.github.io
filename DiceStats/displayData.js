//uncheck advantages when a disadvantage is clicked
function checkAdvantage(obj) {
  if (obj.classList.contains("dis")) {
    var advs = document.getElementsByClassName("adv");

    for (var i = 0; i < advs.length; i++) {
      advs[i].checked = false;
    }
  } else if (obj.classList.contains("adv")) {
    var diss = document.getElementsByClassName("dis");

    for (var i = 0; i < diss.length; i++) {
      diss[i].checked = false;
    }
  }
}
