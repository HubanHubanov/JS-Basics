function vacation(input) {
  let moneyNeeded = Number(input[0]);
  let moneyAvaulable = Number(input[1]);

  let daysTotal = 0;
  let consecutiveDaysSpending = 0;

  for (let index = 2; index < input.length; index += 2) {
    daysTotal++;
    let command = input[index];
    let money = Number(input[index + 1]);

    if (command === "save") {
      consecutiveDaysSpending = 0;
      moneyAvaulable += money;

      if (moneyAvaulable >= moneyNeeded) {
        console.log(`You saved the money for ${daysTotal} days.`);
        break;
      }
    } else if (command === "spend") {
      consecutiveDaysSpending++;
      moneyAvaulable -= money;
      if (money > moneyAvaulable) {
        moneyAvaulable = 0;
      }

      if (consecutiveDaysSpending === 5) {
        console.log("You can't save the money.");
        console.log(`${daysTotal}`);
        break;
      }
    }
  }
}

vacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
