function solve(input) {
  let type = input[0];
  let r = Number(input[1]);
  let c = Number(input[2]);
  let ticket = 0;

  if (type === "Premiere") {
    ticket = 12;
  } else if (type === "Normal") {
    ticket = 7.5;
  } else if (type === "Discount") {
    ticket = 5;
  }

  let peopleNum = r * c;
  let profit = ticket * peopleNum;

  console.log(`${profit.toFixed(2)} leva`);
}
solve(["Discount", "12", "30"]);
