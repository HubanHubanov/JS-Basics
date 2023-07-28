function sumOfTwoNumbers(input) {
  let firsNumber = Number(input[0]);
  let lastNumber = Number(input[1]);
  let magicNumber = Number(input[2]);

  let isFound = false;

  let combinationCounter = 0;

  for (let i = firsNumber; i <= lastNumber; i++) {
    for (let k = firsNumber; k <= lastNumber; k++) {
      combinationCounter++;

      if (i + k === magicNumber) {
        isFound = true;
        console.log(
          `Combination N:${combinationCounter} (${i} + ${k} = ${i + k})`
        );
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound) {
    console.log(
      `${combinationCounter} combinations - neither equals ${magicNumber}`
    );
  }
}

// sumOfTwoNumbers(["1", "10", "5"]);
// console.log("--------------------------");
sumOfTwoNumbers(["23", "24", "20"]);
