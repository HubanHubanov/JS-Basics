function specialNumbers(input) {
  let N = Number(input[0]);
  let buff = "";

  for (let i = 1111; i <= 9999; i++) {
    let numToString = "" + i;
    let specialDigit = 0;
    for (let k = 0; k < numToString.length; k++) {
      let ch = Number(numToString[k]);

      if (N % ch === 0) {
        specialDigit++;
      }
    }
    if (specialDigit === 4) {
      buff += numToString + " ";
    }
  }
  console.log(buff);
}

specialNumbers(["3"]);
console.log("--------------------");
specialNumbers(["11"]);

