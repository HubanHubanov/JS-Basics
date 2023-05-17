function fruitMarket(input) {
  let strawnberriesPrice = Number(input[0]);

  let bananasQuantity = Number(input[1]);
  let orangesQuantity = Number(input[2]);
  let raspberriesQuantity = Number(input[3]);
  let strawberriesQuantity = Number(input[4]);

  let raspberriesPrice = strawnberriesPrice / 2;
  let orangesPrice = 0.6 * raspberriesPrice;
  let bananasPrice = 0.2 * raspberriesPrice;

  let strawnberriesCost = strawnberriesPrice * strawberriesQuantity;
  let bananasCost = bananasPrice * bananasQuantity;
  let orangesCost = orangesPrice * orangesQuantity;
  let raspberriesCost = raspberriesPrice * raspberriesQuantity;

  let totalCost =
    strawnberriesCost + bananasCost + orangesCost + raspberriesCost;

  let totalCostFix = totalCost.toFixed(2);

  console.log(totalCostFix);
}

fruitMarket(["63.5", "3.57", "6.35", "8.15", "2.50"]);
