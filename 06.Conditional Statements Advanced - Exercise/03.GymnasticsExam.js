function gymnastics(input) {
  let country = input[0];
  let discipline = input[1];
  let difficulty = 0;
  let performance = 0;

  switch (country) {
    case "Russia":
      switch (discipline) {
        case "ribbon":
          difficulty = 9.1;
          performance = 9.4;
          break;

        case "hoop":
          difficulty = 9.3;
          performance = 9.8;
          break;

        case "rope":
          difficulty = 9.6;
          performance = 9.0;
          break;
      }

      break;

    case "Bulgaria":
      switch (discipline) {
        case "ribbon":
          difficulty = 9.6;
          performance = 9.4;
          break;

        case "hoop":
          difficulty = 9.55;
          performance = 9.75;
          break;

        case "rope":
          difficulty = 9.5;
          performance = 9.4;
          break;
      }
      break;

    case "Italy":
      switch (discipline) {
        case "ribbon":
          difficulty = 9.2;
          performance = 9.5;
          break;

        case "hoop":
          difficulty = 9.45;
          performance = 9.35;
          break;

        case "rope":
          difficulty = 9.7;
          performance = 9.15;
          break;
      }
      break;
  }
  let points = difficulty + performance;
  let pointTomax = 20 - points;
  let pointsToMaxPercentage = (pointTomax / 20) * 100;
  console.log(
    `The team of ${country} get ${points.toFixed(3)} on ${discipline}.`
  );
  console.log(`${pointsToMaxPercentage.toFixed(2)}%`);
}
gymnastics(["Russia", "rope"]);
