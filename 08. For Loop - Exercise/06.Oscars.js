function oscars(input) {
  let actorName = input[0];
  let points = Number(input[1]);
  let judgesNumber = Number(input[2]);

  for (let index = 3; index <= input.length - 1; index++) {
    if (index % 2 !== 0) {
      points += (input[index].length * input[index + 1]) / 2;
    }
    if (points > 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(
          1
        )}!`
      );
      break;
    }
  }
  if (points < 1250.5) {
    console.log(
      `Sorry, ${actorName} you need ${(1250.5 - points).toFixed(1)} more!`
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
