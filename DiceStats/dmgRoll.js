const damageForm = document.getElementById("damage-roll");

function populateDamageTable() {
  webDmgRoll(
    damageForm.d4.value,
    damageForm.d6.value,
    damageForm.d8.value,
    damageForm.d10.value,
    damageForm.d12.value,
    damageForm.d20.value,
    damageForm.target.value,
    diceForm.dc.value
  );

  return false;
}

function fireball() {
  webDmgRoll(0, 0, 8, 0, 0, 0, damageForm.target.value, diceForm.dc.value);

  return false;
}

/**
This function is responsible for just rolling for DMG and checking what was average and change to achieve target you specified.
*/

let combined = 0;

function webDmgRoll(d4, d6, d8, d10, d12, d20, target, dc) {
  //const needed = dc;  // for "Combined chance"
  let n_row = dc; //or (dc) + 7?

  // Lets grab all the dices and handle any errors.
  // var d4 = 0
  // var d6 = 0
  // var d8 = 0
  // var d10 = 0
  // var d12 = 0
  // var d20 = 0

  var orMore = 0;
  var results = [];
  var resultsSum = 0;

  const checks = 1000000;
  let maxPossible = d4 * 4 + d6 * 6 + d8 * 8 + d10 * 10 + d12 * 12 + d20 * 20;

  // Let's make actual rolls
  for (let i = 0; i < checks; i++) {
    let rollTotal = 0;
    if (d4 > 0) {
      rollSum = rollDice(d4, 4);
    } else {
      rollSum = 0;
    }
    rollTotal = rollTotal + rollSum;
    if (d6 > 0) {
      rollSum = rollDice(d6, 6);
    } else {
      rollSum = 0;
    }
    rollTotal = rollTotal + rollSum;
    if (d8 > 0) {
      rollSum = rollDice(d8, 8);
    } else {
      rollSum = 0;
    }
    rollTotal = rollTotal + rollSum;
    if (d10 > 0) {
      rollSum = rollDice(d10, 10);
    } else {
      rollSum = 0;
    }
    rollTotal = rollTotal + rollSum;
    if (d12 > 0) {
      rollSum = rollDice(d12, 12);
    } else {
      rollSum = 0;
    }
    rollTotal = rollTotal + rollSum;
    if (d20 > 0) {
      rollSum = rollDice(d20, 20);
    } else {
      rollSum = 0;
    }
    rollTotal = rollTotal + rollSum;
    resultsSum = resultsSum + rollTotal;

    if (results[rollTotal] === undefined) {
      results[rollTotal] = 0;
      results[rollTotal] = results[rollTotal] + 1;
    } else {
      results[rollTotal] = results[rollTotal] + 1;
    }

    if (rollTotal >= target) {
      orMore++;
    }
  }

  // Posting to table

  document.getElementById("avg-roll").innerText = (resultsSum / checks).toFixed(
    2
  ); // Average of rolls
  document.getElementById("max-possible").innerText = maxPossible; // maxPossible roll
  document.getElementById("or-more-per").innerText = orMore.toFixed(); // Achieved target or more
  document.getElementById("t-of-av").innerText =
    ((target / (resultsSum / checks)) * 100).toFixed(2) + "%";
  document.getElementById("t-of-max").innerText =
    ((target / maxPossible) * 100).toFixed(2) + "%";

  if (orMore === 0) {
    var orMorePer = 0;
  } else {
    var orMorePer = orMore / checks;
  }

  document.getElementById("perc-t-or-more").innerText =
    (orMorePer * 100).toFixed(2) + "%";

  // let combined = Number(roll_check.getRange("D" + n_row).getValues()) * Number(roll_check.getRange("I19").getValues());
  combined = Number(n_row) * Number(orMorePer);
}

function rollDice(dices, sides) {
  let rollSum = 0;
  for (let i = 0; i < dices; i++) {
    rollSum = rollSum + (1 + Math.floor(Math.random() * sides));
  }
  return rollSum;
}
