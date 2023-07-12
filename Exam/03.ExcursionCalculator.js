function excurseionCalculator(input) {
  let peopleNumber = Number(input[0]);
  let season = input[1];
  let price = 0;

  if (season === "spring") {
    if (peopleNumber <= 5) {
      price = 50;
    } else {
      price = 48;
    }
  } else if (season === "summer") {
    if (peopleNumber <= 5) {
      price = 0.85 * 48.5;
    } else {
      price = 0.85 * 45;
    }
  } else if (season === "autumn") {
    if (peopleNumber <= 5) {
      price = 60;
    } else {
      price = 49.5;
    }
  } else if (season === "winter") {
    if (peopleNumber <= 5) {
      price = 1.08 * 86;
    } else {
      price = 1.08 * 85;
    }
  }

  let totalPrice = peopleNumber * price;

  console.log(`${totalPrice.toFixed(2)} leva.`);
}

excurseionCalculator(["20", "winter"]);
