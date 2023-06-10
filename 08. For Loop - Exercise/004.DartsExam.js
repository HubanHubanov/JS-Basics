function darts(input) {
  let name = input[0];
  let startingPoints = 301;
  let points = 0;
  let succesfullShots = 0;
  let unsuccesfullShots = 0;
  let pointsSum = 0;

  for (let i = 1; i < input.length; i += 2) {
    if (input[i] === "Retire") {
      console.log(
        `${name} retired after ${unsuccesfullShots} unsuccessful shots.`
      );
    }

    if (input[i] === "Single") {
      points = Number(input[i + 1]);
    } else if (input[i] === "Double") {
      points = 2 * Number(input[i + 1]);
    } else if (input[i] === "Triple") {
      points = 3 * Number(input[i + 1]);
    }
    startingPoints -= points;

    if (startingPoints === 0) {
        succesfullShots++
      console.log(`${name} won the leg with ${succesfullShots} shots.`);
      break;
    } else if (startingPoints < 0) {
      unsuccesfullShots++;
      startingPoints += points;
    } else {
        succesfullShots++;
    }
  }
}

darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"])

