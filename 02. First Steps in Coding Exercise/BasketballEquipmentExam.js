function equipment(input) {
  let tax = Number(input[0]);

  let trainers = 0.6 * tax;
  let clothes = 0.8 * trainers;
  let ball = clothes / 4;
  let accesories = ball / 5;

  let totalCost = tax + trainers + clothes + ball + accesories;

  console.log(totalCost.toFixed(2));
}

equipment(["550"]);
