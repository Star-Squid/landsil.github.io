const rollDice = require("./rollDice.js");

/**
This function is responsible for just rolling for DMG and checking what was average and change to achieve target you specified.
*/

function webDmgRoll(d4, d6, d8, d10, d12, d20, target, dc) {
  let orMore = 0;
  let results = [];
  let resultsSum = 0;

  const checks = 1000000;
  let maxPossible = d4 * 4 + d6 * 6 + d8 * 8 + d10 * 10 + d12 * 12 + d20 * 20;

  // Rolls are performed
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

  // These results we need for posting to the table:
  // 1. Average of rolls
  let avgRoll = (resultsSum / checks).toFixed();

  // 2. Max possible roll (coerced to string just for consistency)
  maxPossible = maxPossible.toFixed();

  //3. T or more per
  // if (orMore === 0) {
  //   let orMorePer = 0;
  // } else {
  //   let orMorePer = orMore / checks;
  // }

  !orMore ? (orMorePer = 0) : (orMorePer = orMore / checks);

  orMorePer = orMore.toFixed(); // Achieved target or more

  //4. t of average as percentage
  let tOfAv = ((target / (resultsSum / checks)) * 100).toFixed(2) + "%";

  //5. t of max as percentage
  let tOfMax = ((target / maxPossible) * 100).toFixed(2) + "%";

  //6. Percent T or more
  let percTOrMore = (orMorePer * 100).toFixed(2) + "%";
//! VERY WEIRD RESULT? ('835929.00%')

  //7. combined
  let combined = dc * orMorePer;

  return {
    avgRoll: avgRoll,
    maxPossible: maxPossible,
    orMorePer: orMorePer,
    tOfAv: tOfAv,
    tOfMax: tOfMax,
    percTOrMore: percTOrMore,
    combined: combined,
  };
}

module.exports = webDmgRoll;