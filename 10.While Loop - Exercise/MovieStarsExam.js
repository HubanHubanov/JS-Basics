function movieStars(input) {
  let index = 0;
  let budget = Number(input[index]);
  index++;
  let command = input[index];
  let actorSalary = 0;

  while (command !== "ACTION") {
    let name = command;
    if (name.length > 15) {
      actorSalary = 0.2 * budget;
    } else {
      index++;
      actorSalary = Number(input[index]);
    }

    budget -= actorSalary;

    if (budget < 0) {
      break;
    }

    index++;
    command = input[index];
  }
  if (budget > 0) {
    console.log(`We are left with ${budget.toFixed(2)} leva.`);
  } else {
    console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
  }
}

movieStars([
  "170000",
  "Ben Affleck",
  "40000.50",
  "Zahari Baharov",
  "80000",
  "Tom Hanks",
  "2000.99",
  "ACTION",
]);
