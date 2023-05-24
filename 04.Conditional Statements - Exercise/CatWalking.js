function catWalking(input) {
  let minsWalk = Number(input[0]);
  let timesWalk = Number(input[1]);
  let caloriesIntake = Number(input[2]);

  let caloriesBurnt = minsWalk * timesWalk * 5;

  if (caloriesBurnt >= 0.5 * caloriesIntake) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurnt}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurnt}.`
    );
  }
}

catWalking(["30", "3", "600"]);
