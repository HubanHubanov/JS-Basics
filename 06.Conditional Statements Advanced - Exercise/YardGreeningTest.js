function yardGreening(input) {
  let area = Number(input[0]);

  let cost = 7.61 * area;
  let discount = 0.18 * cost;
  let totalCost = cost - discount;

  console.log(`The final price is: ${totalCost} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["550"]);
