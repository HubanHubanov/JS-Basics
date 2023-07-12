function catDiet(input) {
  let percFat = Number(input[0]);
  let percProtein = Number(input[1]);
  let percCarb = Number(input[2]);
  let totalCalories = Number(input[3]);
  let percWater = Number(input[4]);

  let oneGramFat = 9;
  let oneGramProtein = 4;
  let oneGramCarb = 4;

  let totalFat = ((percFat / 100) * totalCalories) / oneGramFat;
  let totalProteint = ((percProtein / 100) * totalCalories) / oneGramProtein;
  let totalCarb = ((percCarb / 100) * totalCalories) / oneGramCarb;

  let totalFood = totalFat + totalProteint + totalCarb;
  let caloriesPerGramFood = totalCalories / totalFood;
  let oneGramFoodCalories = ((100 - percWater) / 100) * caloriesPerGramFood;

  console.log(oneGramFoodCalories.toFixed(4));
}

catDiet(["40", "40", "20", "3000", "40"]);
