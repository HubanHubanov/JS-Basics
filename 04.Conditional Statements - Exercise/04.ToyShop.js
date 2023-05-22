function toyShop(input) {
  let holidayCost = Number(input[0]);
  let puzzleQuantity = Number(input[1]);
  let dollQuantity = Number(input[2]);
  let teddybearQuantity = Number(input[3]);
  let minionQuantity = Number(input[4]);
  let truckQuantity = Number(input[5]);

  let toysQuantity =
    puzzleQuantity +
    dollQuantity +
    teddybearQuantity +
    minionQuantity +
    truckQuantity;
  let toysTotalPrice =
    puzzleQuantity * 2.6 +
    dollQuantity * 3.0 +
    teddybearQuantity * 4.1 +
    minionQuantity * 8.2 +
    truckQuantity * 2.0;

  let price = 0;

  if (toysQuantity >= 50) {
    price = 0.75 * toysTotalPrice;
  } else {
    price = toysTotalPrice;
  }

  let priceNoRent = 0.9 * price;

  if (priceNoRent >= holidayCost) {
    let moneyDifference = (priceNoRent - holidayCost).toFixed(2);
    console.log(`Yes! ${moneyDifference} lv left.`);
  } else {
    let moneyDifference = (holidayCost - priceNoRent).toFixed(2);
    console.log(`Not enough money! ${moneyDifference} lv needed.`);
  }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);
