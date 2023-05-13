function basketballEquipmnet(input) {
  let tax = Number(input[0]);
  let sneakers = tax - 0.4 * tax;
  let clothes = sneakers - 0.2 * sneakers;
  let ball = 0.25 * clothes;
  let accesories = 0.2 * ball;
  let expenses = tax + sneakers + clothes + ball + accesories;

  console.log(expenses);
}

basketballEquipmnet(["365"]);
