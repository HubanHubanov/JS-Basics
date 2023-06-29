function mobileOperator(input) {
  let years = input[0];
  let type = input[1];
  let data = input[2];
  let monthsToPay = Number(input[3]);

  let price = 0;

  if (years === "one") {
    if (type === "Small") {
      price = 9.98;
    } else if (type === "Middle") {
      price = 18.99;
    } else if (type === "Large") {
      price = 25.98;
    } else if (type === "ExtraLarge") {
      price = 35.99;
    }
  } else if (years === "two") {
    if (type === "Small") {
      price = 8.58;
    } else if (type === "Middle") {
      price = 17.09;
    } else if (type === "Large") {
      price = 23.59;
    } else if (type === "ExtraLarge") {
      price = 31.79;
    }
  }

  if (data === "yes") {
    if (price <= 10) {
      price += 5.5;
    } else if (price <= 30) {
      price += 4.35;
    } else {
      price += 3.85;
    }
  }

  if (years === "two") {
    price *= 0.9625;
  }

  let cost = price * monthsToPay;

  console.log(`${cost.toFixed(2)} lv.`);
}
mobileOperator(["two", "Large", "no", "10"]);
