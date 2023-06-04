function numbers1ToNWithStep3(input) {
  let N = Number(input[0]);

  for (i = 1; i <= N; i += 3) {
    console.log(i);
  }
}
numbers1ToNWithStep3(["15"]);
