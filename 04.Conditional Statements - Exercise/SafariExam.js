function safari(input) {
  let budget = Number(input[0]);
  let fuelNeeded = Number(input[1]);
  let day = input[2];

  fuelPrice = 2.1;
  guidePrice = 100;
  totalCost = fuelNeeded * fuelPrice + guidePrice;

  if (day === "Saturday") {
    totalCost *= 0.9;
  } else if (day === "Sunday") {
    totalCost *= 0.8;
  }

  if (budget >= totalCost) {
    console.log(
      `Safari time! Money left: ${(budget - totalCost).toFixed(2)} lv.`
    );
  } else {
    console.log(
      `Not enough money! Money needed: ${(totalCost - budget).toFixed(2)} lv.`
    );
  }
}

safari(["1000", "10", "Sunday"]);
