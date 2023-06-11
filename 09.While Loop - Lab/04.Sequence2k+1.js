function sequence(input) {
  let limit = Number(input[0]);

  let k = 1;

  while (k <= limit) {
    console.log(k);
    k = k * 2 + 1;
  }
}
sequence(["31"]);
