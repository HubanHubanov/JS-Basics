function gameOfIntervals(input) {
  let gameMoves = Number(input[0]);
  let result = 0;
  let numberCount1 = 0;
  let numberCount2 = 0;
  let numberCount3 = 0;
  let numberCount4 = 0;
  let numberCount5 = 0;
  let numberCount6 = 0;

  for (let i = 1; i < input.length; i++) {
    let number = Number(input[i]);

    if (number >= 0 && number <= 9) {
      numberCount1++;
      result += 0.2 * number;
    } else if (number >= 10 && number <= 19) {
      numberCount2++;
      result += 0.3 * number;
    } else if (number >= 20 && number <= 29) {
      numberCount3++;
      result += 0.4 * number;
    } else if (number >= 30 && number <= 39) {
      numberCount4++;
      result += 50;
    } else if (number >= 40 && number <= 50) {
      numberCount5++;
      result += 100;
    } else {
      numberCount6++;
      result /= 2;
    }
  }
  console.log(result.toFixed(2));
  console.log(`From 0 to 9: ${((numberCount1 / gameMoves) * 100).toFixed(2)}%`);
  console.log(
    `From 10 to 19: ${((numberCount2 / gameMoves) * 100).toFixed(2)}%`
  );
  console.log(
    `From 20 to 29: ${((numberCount3 / gameMoves) * 100).toFixed(2)}%`
  );
  console.log(
    `From 30 to 39: ${((numberCount4 / gameMoves) * 100).toFixed(2)}%`
  );
  console.log(
    `From 40 to 50: ${((numberCount5 / gameMoves) * 100).toFixed(2)}%`
  );
  console.log(
    `Invalid numbers: ${((numberCount6 / gameMoves) * 100).toFixed(2)}%`
  );
}

gameOfIntervals([
  "10",
  "43",
  "57",
  "-12",
  "23",
  "12",
  "0",
  "50",
  "40",
  "30",
  "20",
]);
