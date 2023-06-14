function footbalTournament(input) {
  let teamName = input[0];
  let gamesPlayed = Number(input[1]);

  let w = 0;
  let d = 0;
  let l = 0;
  let points = 0;

  for (let i = 2; i < input.length; i++) {
    let result = input[i];

    if (result === "W") {
      w++;
      points += 3;
    } else if (result === "D") {
      d++;
      points++;
    } else if (result === "L") {
      l++;
    }
  }

  if (gamesPlayed === 0) {
    console.log(`${teamName} hasn't played any games during this season.`);
  } else {
    console.log(`${teamName} has won ${points} points during this season.`);
    console.log(`Total stats:`);
    console.log(`## W: ${w}`);
    console.log(`## D: ${d}`);
    console.log(`## L: ${l}`);
    console.log(`Win rate: ${((w / gamesPlayed) * 100).toFixed(2)}%`);
  }
}

footbalTournament(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
