function test(input) {
  let num1 = input[0];
  let num2 = input[1];
  let num3 = input[2];

  let possibleCombinationsForNum1 = [];
  let possibleCombinationsForNum2 = [];
  let possibleCombinationsForNum3 = [];

  for (let i = 1; i <= num1; i++) {
    if (i % 2 === 0) {
      possibleCombinationsForNum1.push(i);
    }
  }

  for (let i = 1; i <= num2; i++) {
    if (i === 2 || i === 3 || i === 5 || i === 7) {
      possibleCombinationsForNum2.push(i);
    }
  }

  for (let i = 1; i <= num3; i++) {
    if (i % 2 === 0) {
      possibleCombinationsForNum3.push(i);
    }
  }

  for (let i = 0; i < possibleCombinationsForNum1.length; i++) {
    for (let x = 0; x < possibleCombinationsForNum2.length; x++) {
      for (let y = 0; y < possibleCombinationsForNum3.length; y++) {
        let tempNumber =
          possibleCombinationsForNum1[i].toString() +
          possibleCombinationsForNum2[x].toString() +
          possibleCombinationsForNum3[y].toString();

        console.log(tempNumber.split("").join(" "));
      }
    }
  }
}

test([3, 5, 5]);
