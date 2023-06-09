function easterTrip(input) {
  let destination = input[0];
  let date = input[1];
  let nightsNum = Number(input[2]);

  let price = 0;

  switch (destination) {
    case "France":
      switch (date) {
        case "21-23":
          price = 30;
          break;

        case "24-27":
          price = 35;
          break;

        case "28-31":
          price = 40;
          break;
      }

      break;

    case "Italy":
      switch (date) {
        case "21-23":
          price = 28;
          break;

        case "24-27":
          price = 32;
          break;

        case "28-31":
          price = 39;
          break;
      }

      break;

    case "Germany":
      switch (date) {
        case "21-23":
          price = 32;
          break;

        case "24-27":
          price = 37;
          break;

        case "28-31":
          price = 43;
          break;
      }

      break;
  }

  console.log(
    `Easter trip to ${destination} : ${(nightsNum * price).toFixed(2)} leva.`
  );
}

easterTrip(["Germany", "24-27", "5"]);
