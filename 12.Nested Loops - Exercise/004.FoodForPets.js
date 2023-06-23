function foodForPets(input) {
  let days = Number(input[0]);
  let food = Number(input[1]);
  let dogFoodTotal = 0;
  let catFoodTotal = 0;
  let counter = 0;
  let biscuits = 0;

  for (let i = 2; i < input.length; i += 2) {
    counter++;
    let dogFood = Number(input[i]);
    let catFood = Number(input[i + 1]);

    dogFoodTotal += dogFood;
    catFoodTotal += catFood;

    if (counter % 3 === 0) {
      biscuits += 0.1 * (dogFood + catFood);
    }
  }

  let totalFood = dogFoodTotal + catFoodTotal;
  let totalFoodPerc = (totalFood / food) * 100;
  let dogFoodPerc = (dogFoodTotal / totalFood) * 100;
  let catFoodPerc = (catFoodTotal / totalFood) * 100;

  console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
  console.log(`${totalFoodPerc.toFixed(2)}% of the food has been eaten.`);
  console.log(`${dogFoodPerc.toFixed(2)}% eaten from the dog.`);
  console.log(`${catFoodPerc.toFixed(2)}% eaten from the cat.`);
}
foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);
