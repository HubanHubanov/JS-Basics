function tennisRanklist(input) {
  let tournamentsCount = Number(input[0]);
  let startingPoints = Number(input[1]);
  let points = 0;
  let wins = 0;

  for (let i = 2; i < input.length; i++) {
    let stage = input[i];

    if (stage === "W") {
      pointsAdd = 2000;
      wins++;
    } else if (stage === "F") {
      pointsAdd = 1200;
    } else if (stage === "SF") {
      pointsAdd = 720;
    }
    points += pointsAdd;
  }

  let finalPoints = points + startingPoints;
  let avgPoints = points / tournamentsCount;
  let wonTournamentsPerc = (wins / tournamentsCount) * 100;

  console.log(`Final points: ${finalPoints}`);
  console.log(`Average points: ${Math.floor(avgPoints)}`);
  console.log(`${wonTournamentsPerc.toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
