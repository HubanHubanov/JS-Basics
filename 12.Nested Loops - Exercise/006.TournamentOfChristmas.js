function tournamentOfChristmas(input) {
  let index = 0;
  let days = Number(input[index]);
  let daysChecked = 0;
  let money = 0;
  let wins = 0;
  let loses = 0;
  let dayWinner = 0;
  let dayLoser = 0;

  while (daysChecked < days) {
    daysChecked++;

    let wins = 0;
    let loses = 0;

    let tempMoney = 0;

    index++;
    let currentInput = input[index];

    while (currentInput !== "Finish") {
      index++;
      let result = input[index];
      index++;
      currentInput = input[index];

      if (result === "win") {
        tempMoney += 20;
        wins++;
      } else if (result === "lose") {
        loses++;
      }
      if (currentInput === "Finish") {
        if (wins > loses) {
          tempMoney *= 1.1;
          dayWinner++;
        } else {
          dayLoser++;
        }
      }
    }
    money += tempMoney;
  }
  if (dayWinner > dayLoser) {
    money *= 1.2;
    console.log(
      `You won the tournament! Total raised money: ${money.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${money.toFixed(2)}`
    );
  }
}

tournamentOfChristmas([
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
