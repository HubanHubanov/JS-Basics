function equalSumsEvenOddPosition(input) {
  let firstNum = Number(input[0]);
  let lastNum = Number(input[1]);

  let buff = "";

  for (let i = firstNum; i <= lastNum; i++) {
    let numToString = i + "";

    let evenSum = 0;
    let oddSum = 0;

    for (let k = 0; k < numToString.length; k++) {
      let ch = Number(numToString[k]);

      if (k % 2 === 0) {
        evenSum += ch;
      } else {
        oddSum += ch;
      }
    }
    if (evenSum === oddSum) {
      buff += numToString + " ";
    }
  }

  console.log(buff);
}

equalSumsEvenOddPosition([299900, 300000]);
