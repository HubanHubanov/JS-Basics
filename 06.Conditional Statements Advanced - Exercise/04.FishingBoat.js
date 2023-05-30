function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishermenCount = Number(input[2]);
  let rent = 0;

  switch (season) {
    case "Spring":
      if (fishermenCount <= 6) {
        rent = 0.9 * 3000;
      } else if (fishermenCount > 6 && fishermenCount <= 11) {
        rent = 0.85 * 3000;
      } else {
        rent = 0.75 * 3000;
      }
      break;

    case "Summer":
      if (fishermenCount <= 6) {
        rent = 0.9 * 4200;
      } else if (fishermenCount > 6 && fishermenCount <= 11) {
        rent = 0.85 * 4200;
      } else {
        rent = 0.75 * 4200;
      }
      break;
    case "Autumn":
      if (fishermenCount <= 6) {
        rent = 0.9 * 4200;
      } else if (fishermenCount > 6 && fishermenCount <= 11) {
        rent = 0.85 * 4200;
      } else {
        rent = 0.75 * 4200;
      }
      break;
    case "Winter":
      if (fishermenCount <= 6) {
        rent = 0.9 * 2600;
      } else if (fishermenCount > 6 && fishermenCount <= 11) {
        rent = 0.85 * 2600;
      } else {
        rent = 0.75 * 2600;
      }
      break;
    default:
      break;
  }
  if (fishermenCount % 2 === 0 && season !== "Autumn") {
    rent *= 0.95;
  }
  if (budget >= rent) {
    console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${(rent - budget).toFixed(2)} leva.`
    );
  }
}

fishingBoat(["2000", "Winter", "13"]);
