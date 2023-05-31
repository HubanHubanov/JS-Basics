function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let destination = 0;
  let moneySpend = 0;
  let placeToStay = 0;

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season === "summer") {
      moneySpend = 0.3 * budget;
    } else if (season === "winter") {
      moneySpend = 0.7 * budget;
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    if (season === "summer") {
      moneySpend = 0.4 * budget;
    } else if (season === "winter") {
      moneySpend = 0.8 * budget;
    }
  } else if (budget > 1000) {
    destination = "Europe";
    if (season === "summer") {
      moneySpend = 0.9 * budget;
    } else if (season === "winter") {
      moneySpend = 0.9 * budget;
    }
  }

  if (season === "summer" && destination !== "Europe") {
    placeToStay = "Camp";
  } else if ((season = "winter")) {
    placeToStay = "Hotel";
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${placeToStay} - ${moneySpend.toFixed(2)}`);
}
journey(["1500", "summer"]);
