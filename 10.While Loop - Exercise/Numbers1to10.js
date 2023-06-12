function solve() {
  let index = 1;
  let num = Number(index);
  index++;

  while (num <= 10) {
    console.log(num);
    num = Number(index);
    index++;
  }
}

solve();
