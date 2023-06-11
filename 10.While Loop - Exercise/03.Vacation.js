function vacation(input) {
  let index = 0;
  let moneyNeeded = Number(input[index]);
  index++;
  let moneyAvailabe = Number(input[index]);
  index++;

  let command = input[index];
  index++;

  let money = Number(input[index]);
  index++;

  let consecutiveDaysSpending = 0;
  let daysTotal = 0;

  let savedSum = moneyAvailabe;

  let saveTheMoney = false;

  while (savedSum <= moneyNeeded) {
    if (command === "spend") {
      savedSum -= money;
      if (savedSum < money) {
        savedSum = 0;
      }
      consecutiveDaysSpending++;
      daysTotal++;
    } else if (command === "save") {
      savedSum += money;
      consecutiveDaysSpending = 0;
      daysTotal++;

      if (savedSum >= moneyNeeded) {
        break;
      }
    }

    if (consecutiveDaysSpending === 5) {
      saveTheMoney = true;
      console.log("You can't save the money.");
      console.log(daysTotal);
      break;
    }

    command = input[index];
    index++;

    money = Number(input[index]);
    index++;
  }
  if (!saveTheMoney) {
    console.log(`You saved the money for ${daysTotal} days.`);
  }
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
