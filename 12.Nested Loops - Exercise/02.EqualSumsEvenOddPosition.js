function equalSumsEvenOddPosition(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);

  let buff = "";

  for (let i = start; i <= end; i++) {
    let currentNum = "" + i;
    let sumOdd = 0;
    let sumEven = 0;
    for (let j = 0; j < currentNum.length; j++) {
      let currentDigit = Number(currentNum.charAt(j));
      if (j % 2 === 0) {
        sumEven += currentDigit;
      } else {
        sumOdd += currentDigit;
      }
      if (sumEven === sumOdd) {
        buff += `${i} `;
      }
    }
  }

  console.log(buff);
}

equalSumsEvenOddPosition(["100000", "100050"]);
