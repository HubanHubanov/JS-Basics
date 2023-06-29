function easterLunch(input) {
  let easterBreadNumber = Number(input[0]);
  let eggsPacksNumber = Number(input[1]);
  let cookiesKgNumber = Number(input[2]);

  let easterBreadPrice = 3.2;
  let eggsPackPrice = 4.35;
  let cookiesKgPrice = 5.4;
  let paintOneEggPrice = 0.15;

  let totalPrice =
    easterBreadNumber * easterBreadPrice +
    eggsPacksNumber * eggsPackPrice +
    cookiesKgNumber * cookiesKgPrice +
    eggsPacksNumber * 12 * 0.15;

  console.log(totalPrice.toFixed(2));
}

easterLunch(["3", "2", "3"]);
