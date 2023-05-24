function easterBakery(input) {
  let flourPrice = Number(input[0]);
  let flourQuantity = Number(input[1]);
  let sugarQuantity = Number(input[2]);
  let eggsQuantity = Number(input[3]);
  let yeastQuantity = Number(input[4]);

  let sugarPrie = 0.75 * flourPrice;
  let eggsPrice = 1.1 * flourPrice;
  let yeastPrice = 0.2 * sugarPrie;

  let flourCost = flourPrice * flourQuantity;
  let sugarCost = sugarPrie * sugarQuantity;
  let eggsCost = eggsPrice * eggsQuantity;
  let yeastCost = yeastPrice * yeastQuantity;

  let totalCost = flourCost + sugarCost + eggsCost + yeastCost;

  console.log(totalCost.toFixed(2));
}

easterBakery(["50", "10", "3.5", "6", "1"]);
