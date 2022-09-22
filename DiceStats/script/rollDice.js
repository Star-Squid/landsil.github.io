function rollDice(dices, sides) {
  let rollSum = 0;
  for (let i = 0; i < dices; i++) {
    rollSum = rollSum + (1 + Math.floor(Math.random() * sides));
  }
  return rollSum;
}

module.exports = rollDice;
