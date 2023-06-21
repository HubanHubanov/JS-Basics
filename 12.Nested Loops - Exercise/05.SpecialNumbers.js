function specialNumbers(input) {
  let index = 0;
  let N = Number(input[index]);
  let printLine = "";

  for (i = 1111; i <= 9999; i++) {
    let counter = 0;
    let numberToString = "" + i;
    for (j = 0; j < numberToString.length; j++) {
      let ch = Number(numberToString[j]);
      if (N % ch === 0) {
        counter++;
      }
      if (counter === numberToString.length) {
        printLine += "" + numberToString + " ";
      }
    }
  }
  console.log(printLine);
}

specialNumbers(["16"]);
