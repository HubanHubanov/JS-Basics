function oscars(input) {
  let index = 0;
  let name = input[index];
  index++;
  let startingPoints = Number(input[index]);
  index++;
  let judgesNumber = Number(input[index]);
  index++;

  let judgesChecked = 0;
  let totalPoints = 0;

  let points = 0;
  let judgesPoints = 0;

  while (judgesChecked < judgesNumber) {
    let judgeName = input[index];
    index++;
    let score = Number(input[index]);
    index++;

    points = (judgeName.length * score) / 2;
    judgesPoints += points;
    totalPoints = startingPoints + judgesPoints;
    judgesChecked++;

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
