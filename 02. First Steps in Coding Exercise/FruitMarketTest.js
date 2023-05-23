function fruitMarket(a, b, c, d, e) {
  let strawnberriesPrice = Number(a);
  let bananasQuantity = Number(b);
  let orangesQuantity = Number(c);
  let raspberriesQuantity = Number(d);
  let strawberriesQuantity = Number(e);

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

fruitMarket(63.5, 3.57, 6.35, 8.15, 2.5);
