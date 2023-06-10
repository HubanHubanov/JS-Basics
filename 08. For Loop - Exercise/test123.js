function test(input) {
  let budget = Number(input[0]);
  let itemsNum = 0;
  let itemPrice = 0;
  let itemsCost = 0;

  for (let i = 1; i < input.length; i += 2) {
    if (input[i] === "Stop") {
      console.log(`You bought ${itemsNum} products for ${itemsCost} leva.`);
    }

      itemsNum++;
      itemPrice = Number(input[i + 1]);
      itemsCost += itemPrice;
    for(i = 5; i < input.length; i += 4) {
        itemPrice = Number(input[i + 1]) / 2;
    }

    if (itemsCost > budget) {
      console.log(`You don't have enough money!`);
      console.log(`You need ${itemsCost - budget} leva!`);
    }
  }
}

test([
  "153.20",
  "Backpack",
  "25.20",
  "Shoes",
  "54",
  "Sunglasses",
  "30",
  "Stop",
]);
