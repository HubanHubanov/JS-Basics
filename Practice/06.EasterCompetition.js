function easterCompetition(input) {
  let index = 0;
  let chefsNumber = Number(input[index]);
  let chefsChecked = 0;
  let maxScore = 0;
  let maxScoreName = "";

  while (chefsChecked < chefsNumber) {
    chefsChecked++;

    index++;
    let name = input[index];
    let chefsScore = 0;
    index++;
    let currentInput = input[index];

    while (currentInput !== "Stop") {
      let tempScore = Number(currentInput);
      chefsScore += tempScore;

      index++;
      currentInput = input[index];
    }

    console.log(`${name} has ${chefsScore} points.`);

    if (chefsScore > maxScore) {
      maxScore = chefsScore;
      maxScoreName = name;
      console.log(`${maxScoreName} is the new number 1!`);
    }

  }
  console.log(`${maxScoreName} won competition with ${maxScore} points!`);
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
