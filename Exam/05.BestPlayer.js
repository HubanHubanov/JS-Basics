function bestPlayer(input) {
  let index = 0;
  let command = input[index];
  let maxGoals = 0;
  let bestPlayerName = "";

  while (command !== "END") {
    let name = command;
    index++;
    let goals = Number(input[index]);

    if (goals > maxGoals) {
      maxGoals = goals;
      bestPlayerName = name;
    }
    if (goals >= 10) {
      break;
    }

    index++;
    command = input[index];
  }

  console.log(`${bestPlayerName} is the best player!`);

  if (maxGoals >= 3) {
    console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${maxGoals} goals.`);
  }
}
bestPlayer(["Petrov", "2", "Drogba", "11"]);
