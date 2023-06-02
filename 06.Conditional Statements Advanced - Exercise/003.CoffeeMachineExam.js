function coffeeMachine(input) {
  let drinkType = input[0];
  let sugar = input[1];
  let drinksNum = Number(input[2]);
  let price = 0;

  switch (drinkType) {
    case "Espresso":
      switch (sugar) {
        case "Without":
          price = 0.9;
          break;
        case "Normal":
          price = 1.0;
          break;
        case "Extra":
          price = 1.2;
          break;
      }
      break;

    case "Cappuccino":
      switch (sugar) {
        case "Without":
          price = 1.0;
          break;
        case "Normal":
          price = 1.2;
          break;
        case "Extra":
          price = 1.6;
          break;
      }
      break;

    case "Tea":
      switch (sugar) {
        case "Without":
          price = 0.5;
          break;
        case "Normal":
          price = 0.6;
          break;
        case "Extra":
          price = 0.7;
          break;
      }
      break;
  }
  if (sugar === "Without") {
    price *= 0.65;
  }

  if (drinkType === "Espresso" && drinksNum >= 5) {
    price *= 0.75;
  }

  let sum = drinksNum * price;

  if (sum > 15) {
    sum *= 0.8;
  }

  console.log(
    `You bought ${drinksNum} cups of ${drinkType} for ${sum.toFixed(2)} lv.`
  );
}
coffeeMachine(["Tea", "Extra", "3"]);
