function skiTrip(input) {
  let daysNum = Number(input[0]);
  let typeRoom = input[1];
  let review = input[2];

  let rentNight = 0;

  switch (typeRoom) {
    case "room for one person":
      rentNight = 18;
      break;
    case "apartment":
      if (daysNum < 10) {
        rentNight = 0.7 * 25;
      } else if (daysNum <= 15) {
        rentNight = 0.65 * 25;
      } else {
        rentNight = 0.5 * 25;
      }
      break;
    case "president apartment":
      if (daysNum < 10) {
        rentNight = 0.9 * 35;
      } else if (daysNum <= 15) {
        rentNight = 0.85 * 35;
      } else {
        rentNight = 0.8 * 35;
      }
      break;
  }

  let rentSum = rentNight * (daysNum - 1);

  switch (review) {
    case "positive":
      rentSum *= 1.25;
      break;

    case "negative":
      rentSum *= 0.9;
      break;
  }
  console.log(rentSum.toFixed(2));
}

skiTrip(["30", "president apartment", "negative"]);
