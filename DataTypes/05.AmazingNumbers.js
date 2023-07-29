function amazingNumbers(number) {
  let numberToString = number.toString();
  let sum = 0;
  let isAmazing = false;

  for (let i = 0; i < numberToString.length; i++) {
    let currentNumber = Number(numberToString[i]);
    sum += currentNumber;
  }
  let sumToString = sum.toString();

  for (let i = 0; i < sumToString.length; i++) {
    let currentNumber = Number(sumToString[i]);

    if (currentNumber % 9 === 0) {
      isAmazing = true;
      break;
    }
  }
  if (isAmazing) {
    console.log(`${number} Amazing? True`);
  } else {
    console.log(`${number} Amazing? False`);
  }
}

amazingNumbers(999);
