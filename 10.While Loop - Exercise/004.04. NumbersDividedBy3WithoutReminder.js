function solve() {
  let num = 1;

  while (num < 100) {
    num++;
    if (num % 3 === 0) {
      console.log(num);
    }
  }
}
solve();
