function multiplyBy2(input) {
  let index = 0;
  let num = Number(input[index]);
  index++;

  while (num >= 0) {
    if (num >= 0) {
      console.log(`Result: ${(2 * num).toFixed(2)}`);
    }
    num = Number(input[index]);
    index++;
  }

  console.log("Negative number!");
}

multiplyBy2(["12", "43.2144", "12.3", "543.23", "-20"]);
