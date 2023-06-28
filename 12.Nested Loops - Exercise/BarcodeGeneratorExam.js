function barcodeGenerator(input) {
  let num1ToString = "" + input[0];
  let num2ToString = "" + input[1];

  let buff = "";

  for (let i = num1ToString[0]; i <= num2ToString[0]; i++) {
    for (let j = num1ToString[1]; j <= num2ToString[1]; j++) {
      for (let k = num1ToString[2]; k <= num2ToString[2]; k++) {
        for (let l = num1ToString[3]; l <= num2ToString[3]; l++) {
          if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
            buff += `${i}${j}${k}${l} `;
          }
        }
      }
    }
  }

  console.log(buff);
}

barcodeGenerator(["3256", "6579"]);
