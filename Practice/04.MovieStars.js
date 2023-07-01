function movieStars(input) {
  let index = 0;
  let budjet = Number(input[index]);
  index++;
  let currentInput = input[index];
  let salary = 0;

  let budjetIsFinished = false;

  while (currentInput !== "ACTION") {
    if (currentInput.length > 15) {
      salary = 0.2 * budjet;
    } else {
      index++;
      salary = Number(input[index]);
    }

    budjet -= salary;

    if (budjet < 0) {
      budjetIsFinished = true;
      console.log(
        `We need ${Math.abs(budjet).toFixed(2)} leva for our actors.`
      );
      break;
    }

    index++;
    currentInput = input[index];
  }

  if (!budjetIsFinished) {
    console.log(`We are left with ${budjet.toFixed(2)} leva.`);
  }
}

movieStars([
  "600000",
  "Michael Aniston",
  "400000",
  "Pamela Anderson",
  "200010",
  "ACTION",
]);
