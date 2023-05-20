function fruitMarket(input) {
  let strawberriesPrice = Number(input[0]);
  let bananasKg = Number(input[1]);
  let orangesKg = Number(input[2]);
  let raspberriesKg = Number(input[3]);
  let strawberriesKg = Number(input[4]);

  let raspberriesPrice = strawberriesPrice / 2;
  let orangesPrice = 0.6 * raspberriesPrice;
  let bananasPrice = 0.2 * raspberriesPrice;

  let cost =
    strawberriesKg * strawberriesPrice +
    bananasKg * bananasPrice +
    orangesKg * orangesPrice +
    raspberriesKg * raspberriesPrice;

  console.log(cost.toFixed(2));
}

fruitMarket(["63.5", "3.57", "6.35", "8.15", "2.50"]);
