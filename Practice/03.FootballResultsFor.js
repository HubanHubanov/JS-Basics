function footbalResults(input) {
  let result1 = "" + input[0];
  let result2 = "" + input[1];
  let result3 = input[2].toString();

  let wins = 0;
  let loses = 0;
  let draws = 0;

  for (i = 0; i < input.length; i++) {
    let score = input[i];
    let goalsHome = Number(score[0]);
    let goalsGuests = Number(score[2]);

    if (goalsHome > goalsGuests) {
      wins++;
    } else if (goalsHome === goalsGuests) {
      draws++;
    } else {
      loses++;
    }
  }

  console.log(`Team won ${wins} games.`);
  console.log(`Team lost ${loses} games.`);
  console.log(`Drawn games: ${draws}`);
}

footbalResults(["0:2", "0:1", "3:3"]);
