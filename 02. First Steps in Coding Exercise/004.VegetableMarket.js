function vegetableMarket(input) {
  let vegetablesKgPrice = Number(input[0]);
  let fruitsKgPrice = Number(input[1]);
  let vegetablesQuantity = Number(input[2]);
  let fruitsQuantity = Number(input[3]);
  let costInLv =
    vegetablesKgPrice * vegetablesQuantity + fruitsKgPrice * fruitsQuantity;
  costInEur = costInLv / 1.94;

  console.log(costInEur.toFixed(2));
}

vegetableMarket(["0.194", "19.4", "10", "10"]);
