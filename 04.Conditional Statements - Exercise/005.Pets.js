function pets(input) {
  let numberDays = Number(input[0]);
  let foodLeft = Number(input[1]);
  let dayFoodDogKg = Number(input[2]);
  let dayFoodCatKg = Number(input[3]);
  let dayFoodTurtleGrams = Number(input[4]);

  let foodNeeded =
    numberDays * (dayFoodDogKg + dayFoodCatKg + dayFoodTurtleGrams / 1000);

  if (foodLeft >= foodNeeded) {
    console.log(`${Math.floor(foodLeft - foodNeeded)} kilos of food left.`);
  } else {
    console.log(
      `${Math.ceil(foodNeeded - foodLeft)} more kilos of food are needed.`
    );
  }
}
pets(["2", "10", "1", "1", "1200"]);

