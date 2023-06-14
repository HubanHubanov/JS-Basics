function oscars(input) {
  let name = input[0];
  let startingPoints = Number(input[1]);
  let judgesNumber = Number(input[2]);
  let judgesPoints = 0;

  for (let i = 3; i < input.length; i += 2) {
    let nameJudge = input[i];
    let score = Number(input[i + 1]);

    let points = (nameJudge.length * score) / 2;
    judgesPoints += points;
    totalPoints = judgesPoints + startingPoints;

    if (totalPoints > 1250.5) {
      break;
    }
  }

  if (totalPoints > 1250.5) {
    console.log(
      `Congratulations, ${name} got a nominee for leading role with ${totalPoints.toFixed(
        1
      )}!`
    );
  } else {
    console.log(
      `Sorry, ${name} you need ${(1250.5 - totalPoints).toFixed(1)} more!`
    );
  }
}

oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
