function bestPlayer(input) {
  let index = 0;
  let command = input[index];
  index++;
  let name = 0;
  let goals = 0;
  let bestPlayerName = 0;
  let maxGoals = 0;

  while (command !== "END") {
    name = command;
    goals = Number(input[index]);
    index++;

    if (goals > maxGoals) {
      maxGoals = goals;
      bestPlayerName = name;
    }

    if (goals >= 10) {
      break;
    }

    command = input[index];
    index++;
  }

  console.log(`${bestPlayerName} is the best player!`);

  if (maxGoals >= 3) {
    console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${maxGoals} goals.`);
  }
}

bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
