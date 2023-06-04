function evenPowersOf2(input) {
  let N = Number(input[0]);

  for (i = 0; i <= N; i += 2) {
    console.log(Math.pow(2, i));
  }
}

evenPowersOf2(["7"]);
