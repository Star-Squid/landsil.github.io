import rollDice from "./rollDice.js";

/**
This function is responsible for just rolling for DMG and checking what was average and change to achieve target you specified.
*/

function webDmgRoll(d4, d6, d8, d10, d12, d20, target, dc) {
  let orMore = 0;
  let results = [];
  let resultsSum = 0;
  let rollSum //added here cause maybe i deleted it by mistake

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
  let avgRoll = resultsSum / checks;

  // 2. Max possible roll 

  //3. T or more perAchieved target or more

  let orMorePer
  !orMore ? (orMorePer = 0) : (orMorePer = orMore / checks);

  //orMorePer = orMore; // !was this for something?

  //4. t of average as percentage
  let tOfAv = target / (resultsSum / checks);

  //5. t of max as percentage
  let tOfMax = target / maxPossible;

  //6. Percent T or more
  let percTOrMore = orMorePer
//! VERY WEIRD RESULT when percentegized ('835929.00%')
//!shouldn't it do sth interesting?

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

export default webDmgRoll;