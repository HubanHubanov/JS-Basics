function solve2(input) {
  let index = 0;
  let judges = Number(input[index]);
  index++;
  let command = input[index];
  let totalSum = 0;
  let counter = 0;

  while (command !== "Finish") {
    let name = command;
    let gradeSum = 0;
    for (i = 1; i <= judges; i++) {
      index++;
      let grade = Number(input[index]);
      gradeSum += grade;
      totalSum += grade;
      counter++;
    }
    console.log(`${name} - ${(gradeSum / judges).toFixed(2)}.`);
    index++;
    command = input[index];
  }

  console.log(
    `Student's final assessment is ${(totalSum / counter).toFixed(2)}.`
  );
}

solve2([
  "3",
  "Arrays",
  "4.53",
  "5.23",
  "5.00",
  "Lists",
  "5.83",
  "6.00",
  "5.42",
  "Finish",
]);
