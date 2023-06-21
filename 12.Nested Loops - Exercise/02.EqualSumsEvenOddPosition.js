function equalSumsEvenOddPosition(input) {
  let firstNumber = Number(input[0]);
  let lastNumber = Number(input[1]);

  let evenSum = 0;
  let oddSum = 0;

  let printResult = "";

  for (let i = firstNumber; i <= lastNumber; i++) {
    evenSum = 0;
    oddSum = 0;
    let buff = "";
    buff += "" + i;
    for (j = 0; j < buff.length; j++) {
      let ch = Number(buff[j]);

      if (j % 2 === 0) {
        oddSum += ch;
      } else {
        evenSum += ch;
      }
    }

    if (evenSum === oddSum) {
      printResult += "" + buff + " ";
    }
  }

  console.log(printResult);
}

equalSumsEvenOddPosition(["299900", "300000"]);
