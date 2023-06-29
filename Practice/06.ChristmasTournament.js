function christmsTournament(input) {
  let index = 0;
  let daysNumber = Number(input[index]);

  let daysChecked = 0;

  let daysWon = 0;
  let daysLost = 0;

  let totalMoney = 0;

  while (daysChecked < daysNumber) {
    daysChecked++;

    let moneyForDay = 0;
    let wins = 0;
    let loses = 0;

    index++;
    let currentInput = input[index];

    while (currentInput !== "Finish") {
      index++;
      let result = input[index];

      if (result === "win") {
        wins++;
        moneyForDay += 20;
      } else if (result === "lose") {
        loses++;
      }

      index++;
      currentInput = input[index];

      if (currentInput === "Finish") {
        if (wins > loses) {
          daysWon++;
          moneyForDay *= 1.1;
        } else {
          daysLost++;
        }

        totalMoney += moneyForDay;
      }
    }
  }

  if (daysWon > daysLost) {
    totalMoney *= 1.2;
    console.log(
      `You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`
    );
  }
}

christmsTournament([
  "3",
  "darts",
  "lose",
  "handball",
  "lose",
  "judo",
  "win",
  "Finish",
  "snooker",
  "lose",
  "swimming",
  "lose",
  "squash",
  "lose",
  "table tennis",
  "win",
  "Finish",
  "volleyball",
  "win",
  "basketball",
  "win",
  "Finish",
]);
