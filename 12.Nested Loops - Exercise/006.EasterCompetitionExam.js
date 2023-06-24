function easterCompetition(input) {
  let index = 0;
  let chefsNum = Number(input[index]);
  let chefsChecked = 0;
  let maxPoints = 0;
  let name = 0;
  let hasMaxPoints = false;
  let buff = 0;
  let maxPointsName = 0;

  while (chefsChecked < chefsNum) {
    hasMaxPoints = false;
    chefsChecked++;
    let score = 0;

    index++;
    name = input[index];

    index++;
    let currentInput = input[index];

    while (currentInput !== "Stop") {
      let tempScore = Number(currentInput);
      score += tempScore;

      index++;
      currentInput = input[index];
      if (currentInput === "Stop") {
        if (score > maxPoints) {
          maxPoints = score;
          maxPointsName = name;
          hasMaxPoints = true;
        }
      }
    }

    console.log(`${name} has ${score} points.`);

    if (hasMaxPoints) {
      console.log(`${name} is the new number 1!`);
    }
  }

  console.log(`${maxPointsName} won competition with ${maxPoints} points!`);
}

easterCompetition([
  "2",
  "Chef Angelov",
  "9",
  "9",
  "9",
  "Stop",
  "Chef Rowe",
  "10",
  "10",
  "10",
  "10",
  "Stop",
]);
