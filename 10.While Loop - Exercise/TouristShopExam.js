function touristShop(input) {
  let index = 0;
  let budget = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let price = Number(input[index]);
  index++;
  let productNum = 0;
  let totalPrice = 0;

  while (command !== "Stop") {
    productNum++;

    if (productNum % 3 === 0) {
      price *= 0.5;
    }

    budget -= price;
    totalPrice += price;

    if (budget < 0) {
      break;
    }

    command = input[index];
    index++;
    price = Number(input[index]);
    index++;
  }

  if (budget < 0) {
    console.log(`You don't have enough money!`);
    console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
  } else {
    console.log(
      `You bought ${productNum} products for ${totalPrice.toFixed(2)} leva.`
    );
  }
}

touristShop(["54", "Thermal underwear", "24", "Sunscreen", "45"]);
