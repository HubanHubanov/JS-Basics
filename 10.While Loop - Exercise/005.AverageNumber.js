function averageNumber(input) {
  let index = 0;
  let n = Number(input[index]);
  index++;
  let numbersCount = 0;
  let sum = 0;

  while (numbersCount < n) {
    let number = Number(input[index]);
    index++;
    numbersCount++;
    sum += number;
  }
  let avg = sum / n;
  console.log(avg.toFixed(2));
}

averageNumber(["3", "82", "43", "22"]);
