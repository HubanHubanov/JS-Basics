function vacation(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let accomodation = 0;
  let destination = 0;
  let price = 0;

  if (budget <= 1000) {
    accomodation = "Camp";
    if (season === "Summer") {
      destination = "Alaska";
      price = 0.65 * budget;
    } else if (season === "Winter") {
      destination = "Morocco";
      price = 0.45 * budget;
    }
  } else if (budget <= 3000) {
    accomodation = "Hut";
    if (season === "Summer") {
      destination = "Alaska";
      price = 0.8 * budget;
    } else if (season === "Winter") {
      destination = "Morocco";
      price = 0.6 * budget;
    }
  } else {
    accomodation = "Hotel";
    if (season === "Summer") {
      destination = "Alaska";
      price = 0.9 * budget;
    } else if (season === "Winter") {
      destination = "Morocco";
      price = 0.9 * budget;
    }
  }

  console.log(`${destination} - ${accomodation} - ${price.toFixed(2)}`);
}

vacation(["2543.99", "Winter"]);
