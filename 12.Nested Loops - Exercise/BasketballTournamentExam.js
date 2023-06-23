function basketaballTournament(input) {
  let index = 0;
  let command = input[index];
  let wonGames = 0;
  let lostGames = 0;
  let totalGames = 0;

  while (command !== "End of tournaments") {
    let name = command;

    index++;
    let gamesNumber = Number(input[index]);

    let gameCounter = 0;

    while (gameCounter < gamesNumber) {
      totalGames++;
      gameCounter++;
      index++;
      let homeResult = Number(input[index]);
      index++;
      let guestResult = Number(input[index]);

      if (homeResult > guestResult) {
        wonGames++;
        console.log(
          `Game ${gameCounter} of tournament ${name}: win with ${
            homeResult - guestResult
          } points.`
        );
      } else {
        lostGames++;
        console.log(
          `Game ${gameCounter} of tournament ${name}: lost with ${
            guestResult - homeResult
          } points.`
        );
      }
    }

    index++;
    command = input[index];
  }

  let wonGamesPerc = (wonGames / totalGames) * 100;
  let lostGamesPerc = (lostGames / totalGames) * 100;

  console.log(`${wonGamesPerc.toFixed(2)}% matches win`);
  console.log(`${lostGamesPerc.toFixed(2)}% matches lost`);
}

basketaballTournament([
  "Ballers",
  "3",
  "87",
  "63",
  "56",
  "65",
  "75",
  "64",
  "Sharks",
  "4",
  "64",
  "76",
  "65",
  "86",
  "68",
  "99",
  "45",
  "78",
  "End of tournaments",
]);
