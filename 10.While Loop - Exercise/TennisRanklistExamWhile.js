function tennisRanking(input) {
  let tournamentsCount = Number(input[0]);
  let startingPoints = Number(input[1]);
  let index = 2;

  let casesChecked = 0;
  let points = 0;
  let wins = 0;

  while (casesChecked < tournamentsCount) {
    let stage = input[index];
    index++;
    casesChecked++;

    if (stage === "W") {
      points += 2000;
      wins++;
    } else if (stage === "F") {
      points += 1200;
    } else if (stage === "SF") {
      points += 720;
    }
  }

  let finalPoints = points + startingPoints;
  let avgPoints = points / tournamentsCount;
  let wonTournamentsPerc = (wins / tournamentsCount) * 100;

  console.log(`Final points: ${finalPoints}`);
  console.log(`Average points: ${Math.floor(avgPoints)}`);
  console.log(`${wonTournamentsPerc.toFixed(2)}%`);
}

tennisRanking(["5", "1400", "F", "SF", "W", "W", "SF"]);
