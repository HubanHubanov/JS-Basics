function equalSumsEvenOddPosition(input) {
  let firstNumber = Number(input[0]);
  let lastNumber = Number(input[1]);

  let printResult = "";

  for (let i = firstNumber; i <= lastNumber; i++) {
    let evenSum = 0;
    let oddSum = 0;
    let buff = "";
    buff += "" + i;
    for (j = 0; j < buff.length; j++) {
      let ch = Number(buff[j]);

      if (j % 2 === 0) {
        evenSum += ch;
      } else {
        oddSum += ch;
      }
    }

    if (evenSum === oddSum) {
      printResult += "" + buff + " ";
    }
  }

  console.log(printResult);
}

equalSumsEvenOddPosition(["299900", "300000"]);
