function tennisRanklist(input) {
  let tournamentsNumber = Number(input[0]);
  let startingPoints = Number(input[1]);
  let points = 0;
  let tournamentsWon = 0;

  for (i = 2; i < input.length; i++) {
    let ch = input[i];

    switch (ch) {
      case "W":
        points += 2000;
        tournamentsWon += 1;
        break;
      case "F":
        points += 1200;
        break;
      case "SF":
        points += 720;
        break;
    }
  }

  let finaPoints = points + startingPoints;
  console.log(`Final points: ${finaPoints}`);
  let averagePoints = points / tournamentsNumber;
  console.log(`Average points: ${Math.floor(averagePoints)}`);
  let percentageWonToutnaments = (tournamentsWon / tournamentsNumber) * 100;
  console.log(`${percentageWonToutnaments.toFixed(2)}%`);
}
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
