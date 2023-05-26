function fuelTank(input) {
  let fuelType = input[0];
  let fuelLitres = Number(input[1]);
  let clubCard = input[2];

  let gasolinePrice = 2.22;
  let dieselPrice = 2.33;
  let gasPrice = 0.93;

  let fuelPrice = 0;

  if (fuelType === "Gasoline") {
    if (clubCard === "Yes") {
      fuelPrice = gasolinePrice - 0.18;
    } else {
      fuelPrice = gasolinePrice;
    }
  } else if (fuelType === "Diesel") {
    if (clubCard === "Yes") {
      fuelPrice = dieselPrice - 0.12;
    } else {
      fuelPrice = dieselPrice;
    }
  } else if (fuelType === "Gas") {
    if (clubCard === "Yes") {
      fuelPrice = gasPrice - 0.08;
    } else {
      fuelPrice = gasPrice;
    }
  }
  let fuelCost = fuelLitres * fuelPrice;

  if (fuelLitres < 20) {
    fuelCost;
  } else if (fuelLitres > 25) {
    fuelCost *= 0.9;
  } else {
    fuelCost *= 0.92;
  }
  console.log(`${fuelCost.toFixed(2)} lv.`);
}

fuelTank(["Diesel", "19", "No"]);
