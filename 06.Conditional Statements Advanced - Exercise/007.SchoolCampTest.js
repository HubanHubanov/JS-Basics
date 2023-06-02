function schoolCamp(input) {
  let season = input[0];
  let genderGroup = input[1];
  let studentsNum = input[2];
  let nightsNum = Number(input[3]);
  let sport = 0;
  let pricePerNight = 0;

  switch (season) {
    case "Winter":
      switch (genderGroup) {
        case "girls":
          sport = "Gymnastics";
          pricePerNight = 9.6;

          break;
        case "boys":
          sport = "Judo";
          pricePerNight = 9.6;

          break;
        case "mixed":
          sport = "Ski";
          pricePerNight = 10.0;

          break;
      }
      break;
    case "Spring":
      switch (genderGroup) {
        case "girls":
          sport = "Athletics";
          pricePerNight = 7.2;

          break;
        case "boys":
          sport = "Tennis";
          pricePerNight = 7.2;

          break;
        case "mixed":
          sport = "Cycling";
          pricePerNight = 9.5;

          break;
      }
      break;

    case "Summer":
      switch (genderGroup) {
        case "girls":
          sport = "Volleyball";
          pricePerNight = 15;

          break;
        case "boys":
          sport = "Football";
          pricePerNight = 15;

          break;
        case "mixed":
          sport = "Swimming";
          pricePerNight = 20;

          break;
      }
      break;
  }

  let totalPrice = pricePerNight * nightsNum * studentsNum;

  if (studentsNum >= 50) {
    totalPrice *= 0.5;
  } else if (studentsNum >= 20 && studentsNum < 50) {
    totalPrice *= 0.85;
  } else if (studentsNum >= 10 && studentsNum < 20) {
    totalPrice *= 0.95;
  }

  console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
}

schoolCamp(["Spring", "mixed", "17", "14"]);
