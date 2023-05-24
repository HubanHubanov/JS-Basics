function flowersShop(input) {
  let magnolias = Number(input[0]);
  let hyacinths = Number(input[1]);
  let roses = Number(input[2]);
  let cactuses = Number(input[3]);
  let presentCost = Number(input[4]);

  let magnoliasPrice = 3.25;
  let hyacinthsPrice = 4;
  let rosesPrice = 3.5;
  let cactusesPrie = 8;

  let totalPrice =
    magnolias * magnoliasPrice +
    hyacinths * hyacinthsPrice +
    roses * rosesPrice +
    cactuses * cactusesPrie;
  let priceAfterTax = 0.95 * totalPrice;

  if (priceAfterTax >= presentCost) {
    console.log(
      `She is left with ${Math.floor(priceAfterTax - presentCost)} leva.`
    );
  } else {
    console.log(
      `She will have to borrow ${Math.ceil(presentCost - priceAfterTax)} leva.`
    );
  }
}

flowersShop(["2", "3", "5", "1", "50"]);
