function deerOfSanta(input) {
  let days = Number(input[0]);
  let foodLeft = Number(input[1]);
  letFoodFirstDeer = Number(input[2]);
  letFoodSecondDeer = Number(input[3]);
  letFoodThirdDeer = Number(input[4]);

  let foodTotal =
    days * (letFoodFirstDeer + letFoodSecondDeer + letFoodThirdDeer);

  if (foodLeft >= foodTotal) {
    console.log(`${Math.floor(foodLeft - foodTotal)} kilos of food left.`);
  } else {
    console.log(
      `${Math.ceil(foodTotal - foodLeft)} more kilos of food are needed.`
    );
  }
}

deerOfSanta(["5", "10", "2.1", "0.8", "11"]);
