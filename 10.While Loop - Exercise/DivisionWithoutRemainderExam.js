function divisionWithoutReminder(input) {
  let index = 0;
  let numbersCount = input[index];
  index++;
  let numbersChecked = 0;
  let p1Counter = 0;
  let p2Counter = 0;
  let p3Counter = 0;

  while (numbersChecked < numbersCount) {
    let currentNumber = Number(input[index]);
    index++;
    numbersChecked++;

    if (currentNumber % 2 === 0) {
      p1Counter++;
    }

    if (currentNumber % 3 === 0) {
      p2Counter++;
    }

    if (currentNumber % 4 === 0) {
      p3Counter++;
    }
  }
  let p1 = (p1Counter / numbersCount) * 100;
  let p2 = (p2Counter / numbersCount) * 100;
  let p3 = (p3Counter / numbersCount) * 100;

  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
}

divisionWithoutReminder([
  "10",
  "680",
  "2",
  "600",
  "200",
  "800",
  "799",
  "199",
  "46",
  "128",
  "65",
]);
