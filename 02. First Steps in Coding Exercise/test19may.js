function solve(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let c = Number(input[2]);
  let d = Number(input[3]);

  console.log(a.toFixed(2));
  console.log(Math.ceil(a));
  console.log(Math.floor(b));
  console.log(Math.ceil(c));
  console.log(Math.ceil(d));
  console.log(Math.floor(c));
  console.log(Math.trunc(a));
  console.log(Math.trunc(c));
}

solve(["5.202", "8.992", "-5.303", "-8.897"]);
