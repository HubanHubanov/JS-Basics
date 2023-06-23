function energyBooster(input) {
  let flavour = input[0];
  let size = input[1];
  let number = Number(input[2]);
  let price = 0;

  if (flavour === "Watermelon") {
    if (size === "small") {
      price = 2 * 56;
    } else if (size === "big") {
      price = 5 * 28.7;
    }
  } else if (flavour === "Mango") {
    if (size === "small") {
      price = 2 * 36.66;
    } else if (size === "big") {
      price = 5 * 19.6;
    }
  } else if (flavour === "Pineapple") {
    if (size === "small") {
      price = 2 * 42.1;
    } else if (size === "big") {
      price = 5 * 24.8;
    }
  } else if (flavour === "Raspberry")
    if (size === "small") {
      price = 2 * 20;
    } else if (size === "big") {
      price = 5 * 15.2;
    }

  let cost = number * price;

  if (cost > 1000) {
    cost *= 0.5;
  } else if (cost >= 400) {
    cost *= 0.85;
  }

  console.log(`${cost.toFixed(2)} lv.`);
}

energyBooster(["Pineapple", "small", "1"]);
