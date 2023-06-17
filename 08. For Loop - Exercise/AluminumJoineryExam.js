function aluminumJoinery(input) {
  let joineryNum = Number(input[0]);
  let size = input[1];
  let delivery = input[2];
  let price = 0;

  if (size === "90X130") {
    price = 110;
    if (joineryNum > 60) {
      price *= 0.92;
    } else if (joineryNum > 30) {
      price *= 0.95;
    }
  } else if (size === "100X150") {
    price = 140;
    if (joineryNum > 80) {
      price *= 0.9;
    } else if (joineryNum > 40) {
      price *= 0.94;
    }
  } else if (size === "130X180") {
    price = 190;
    if (joineryNum > 50) {
      price *= 0.88;
    } else if (joineryNum > 20) {
      price *= 0.93;
    }
  } else if (size === "200X300") {
    price = 250;
    if (joineryNum > 50) {
      price *= 0.86;
    } else if (joineryNum > 25) {
      price *= 0.91;
    }
  }
  totalCost = joineryNum * price;

  if (delivery === "With delivery") {
    totalCost += 60;
  }

  if (joineryNum > 99) {
    totalCost *= 0.96;
  }

  if (joineryNum < 10) {
    console.log("Invalid order");
  } else {
    console.log(`${totalCost.toFixed(2)} BGN`);
  }
}

aluminumJoinery(["2", "130X180", "With delivery"]);
