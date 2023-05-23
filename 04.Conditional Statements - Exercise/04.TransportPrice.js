function transportPrice(input) {
  let distance = Number(input[0]);
  let tariff = input[1];

  let taxiTariff = 0;
  if (tariff === "day") {
    taxiTariff = 0.79;
  } else if (tariff === "night") {
    taxiTariff = 0.9;
  }

  let cost = 0;
  if (distance < 20) {
    cost = distance * taxiTariff + 0.7;
  } else if (distance < 100) {
    cost = distance * 0.09;
  } else {
    cost = distance * 0.06;
  }
  console.log(cost.toFixed(2));
}
transportPrice(["180", "night"]);
