function mobileOperator(input) {
  let period = input[0];
  let typeContract = input[1];
  let data = input[2];
  let monthsNum = Number(input[3]);
  let tax = 0;

  switch (typeContract) {
    case "Small":
      switch (period) {
        case "one":
          tax = 9.98;
          break;
        case "two":
          tax = 8.58;
          break;
      }

      break;

    case "Middle":
      switch (period) {
        case "one":
          tax = 18.99;
          break;
        case "two":
          tax = 17.09;
          break;
      }

      break;

    case "Large":
      switch (period) {
        case "one":
          tax = 25.98;
          break;
        case "two":
          tax = 23.59;
          break;
      }

      break;

    case "ExtraLarge":
      switch (period) {
        case "one":
          tax = 35.99;
          break;
        case "two":
          tax = 31.79;
          break;
      }

      break;
  }

  if (data === "yes") {
    if (tax <= 10) {
      tax += 5.5;
    } else if (tax <= 30) {
      tax += 4.35;
    } else {
      tax += 3.85;
    }
  }
  let totalSum = tax * monthsNum;

  if (period === "two") {
    totalSum = totalSum - 0.0375 * totalSum;
  }

  console.log(`${totalSum.toFixed(2)} lv.`);
}
mobileOperator(["two", "Small", "yes", "20"]);
