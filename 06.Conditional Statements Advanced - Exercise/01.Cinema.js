function cinema(input) {
  let type = input[0];
  let r = Number(input[1]);
  let c = Number(input[2]);

  let numberOfSeats = r * c;
  totalSum = 0;
  switch (type) {
    case "Premiere":
      totalSum = 12 * numberOfSeats;
      console.log(`${totalSum.toFixed(2)} leva`);
      break;
    case "Normal":
      totalSum = 7.5 * numberOfSeats;
      console.log(`${totalSum.toFixed(2)} leva`);
      break;
    case "Discount":
      totalSum = 5 * numberOfSeats;
      console.log(`${totalSum.toFixed(2)} leva`);
      break;
    default:
      break;
  }
}

cinema(["Discount", "12", "30"]);
