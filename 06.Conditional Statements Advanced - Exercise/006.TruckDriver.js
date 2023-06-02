function truckDriver(input) {
  let season = input[0];
  let miles = Number(input[1]);
  let moneyPerMile = 0;

  switch (season) {
    case "Spring":
      if (miles <= 5000) {
        moneyPerMile = 0.75;
      } else if (miles <= 10000) {
        moneyPerMile = 0.95;
      } else if (miles <= 20000) {
        moneyPerMile = 1.45;
      }
      break;

    case "Summer":
      if (miles <= 5000) {
        moneyPerMile = 0.9;
      } else if (miles <= 10000) {
        moneyPerMile = 1.1;
      } else if (miles <= 20000) {
        moneyPerMile = 1.45;
      }
      break;

    case "Autumn":
      if (miles <= 5000) {
        moneyPerMile = 0.75;
      } else if (miles <= 10000) {
        moneyPerMile = 0.95;
      } else if (miles <= 20000) {
        moneyPerMile = 1.45;
      }
      break;

    case "Winter":
      if (miles <= 5000) {
        moneyPerMile = 1.05;
      } else if (miles <= 10000) {
        moneyPerMile = 1.25;
      } else if (miles <= 20000) {
        moneyPerMile = 1.45;
      }
      break;
  }

  let money = 4 * (miles * moneyPerMile);
  let totalMOney = 0.9 * money;
  console.log(totalMOney.toFixed(2));
}
truckDriver(["Winter", "16042"]);
