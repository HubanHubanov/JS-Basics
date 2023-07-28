function easterCompetition(input) {
  let index = 0;
  let chefsNumber = Number(input[index]);

  let maxScore = 0;
  let bestChef = "";

  for (let i = 1; i <= chefsNumber; i++) {
    index++;
    let chefsName = input[index];

    index++;
    let currentInput = input[index];

    let chefScore = 0;

    while (currentInput !== "Stop") {
      let score = Number(currentInput);

      chefScore += score;

      index++;
      currentInput = input[index];
    }

    console.log(`${chefsName} has ${chefScore} points.`);

    if (chefScore > maxScore) {
      console.log(`${chefsName} is the new number 1!`);
      maxScore = chefScore;

      bestChef = chefsName;
    }
  }

  console.log(`${bestChef} won competition with ${maxScore} points!`);
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
