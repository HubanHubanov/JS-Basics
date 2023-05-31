function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let destination = 0;
  let moneySpend = 0;
  let placeToStay = 0;

  if (budget <= 100) {
    destination = "Bulgaria";
    switch (season) {
      case "summer":
        moneySpend = 0.3 * budget;
        break;
      case "winter":
        moneySpend = 0.7 * budget;
        break;
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    switch (season) {
      case "summer":
        moneySpend = 0.4 * budget;
        break;
      case "winter":
        moneySpend = 0.8 * budget;
        break;
      default:
        break;
    }
  } else {
    destination = "Europe";
    moneySpend = 0.9 * budget;
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
