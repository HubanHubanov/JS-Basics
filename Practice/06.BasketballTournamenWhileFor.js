function basketBallTournamen(input) {
  let index = 0;
  let currentInput = input[index];
  let wins = 0;
  let loses = 0;
  let totalGames = 0;

  while (currentInput !== "End of tournaments") {
    let name = currentInput;

    index++;
    let gamesNumber = Number(input[index]);

    let gamesChecked = 0;
    for (let i = 1; i <= gamesNumber; i++) {
      gamesChecked++;

      index++;
      let homePoints = Number(input[index]);
      index++;
      let guestPoints = Number(input[index]);

      if (homePoints > guestPoints) {
        wins++;
        console.log(
          `Game ${gamesChecked} of tournament ${name}: win with ${
            homePoints - guestPoints
          } points.`
        );
      } else if (homePoints < guestPoints) {
        loses++;
        console.log(
          `Game ${gamesChecked} of tournament ${name}: lost with ${
            guestPoints - homePoints
          } points.`
        );
      }
    }
    totalGames += gamesChecked;

    index++;
    currentInput = input[index];
  }

  let winsPerc = (wins / totalGames) * 100;
  let losesPerc = (loses / totalGames) * 100;

  console.log(`${winsPerc.toFixed(2)}% matches win`);
  console.log(`${losesPerc.toFixed(2)}% matches lost`);
}

basketBallTournamen([
  "Dunkers",
  "2",
  "75",
  "65",
  "56",
  "73",
  "Fire Girls",
  "3",
  "67",
  "34",
  "83",
  "98",
  "66",
  "45",
  "End of tournaments",
]);
