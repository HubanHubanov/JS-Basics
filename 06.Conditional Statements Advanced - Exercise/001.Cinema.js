function cinema(input) {
  let type = input[0];
  let r = Number(input[1]);
  let c = Number(input[2]);
  let totalCost = 0;

  if (type === "Premiere") {
    totalCost = 12 * r * c;
    console.log(`${totalCost.toFixed(2)} leva`);
  } else if (type === "Normal") {
    totalCost = 7.5 * r * c;
    console.log(`${totalCost.toFixed(2)} leva`);
  } else if (type === "Discount") {
    totalCost = 5 * r * c;
    console.log(`${totalCost.toFixed(2)} leva`);
  }
}
cinema(["Discount", "12", "30"]);
