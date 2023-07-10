function equalSumsEvenOddPosition(input) {
  let firstNum = Number(input[0]);
  let lastNum = Number(input[1]);

  let buff = "";

  for (let i = firstNum; i <= lastNum; i++) {
    let numToString = i + "";

    if (
      Number(numToString[0]) +
        Number(numToString[2]) +
        Number(numToString[4]) ===
      Number(numToString[1]) + Number(numToString[3]) + Number(numToString[5])
    ) {
      buff += numToString + " ";
    }
  }

  console.log(buff);
}
equalSumsEvenOddPosition(["299900", "300000"]);
