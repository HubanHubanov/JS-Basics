function catWalking(input) {
  let minsWalking = Number(input[0]);
  let walkingsNumber = Number(input[1]);
  let caloriesIntake = Number(input[2]);

  let caloriesBurned = minsWalking * walkingsNumber * 5;

  if (caloriesBurned >= 0.5 * caloriesIntake) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}. `
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`
    );
  }
}

catWalking(["30", "3", "600"]);
