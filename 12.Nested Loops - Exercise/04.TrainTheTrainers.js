function trainTheTrainers(input) {
  let index = 0;
  let judges = Number(input[index]);
  index++;
  let command = input[index];
  let gradesSumTotal = 0;
  let counter = 0;

  while (command !== "Finish") {
    let name = command;
    let gradeSum = 0;
    counter++;

    for (i = 1; i <= judges; i++) {
      index++;
      let grade = Number(input[index]);
      gradeSum += grade;
      gradesSumTotal += grade;
    }
    console.log(`${name} - ${(gradeSum / judges).toFixed(2)}.`);

    index++;
    command = input[index];
  }

  console.log(
    `Student's final assessment is ${(
      gradesSumTotal /
      (counter * judges)
    ).toFixed(2)}.`
  );
}

trainTheTrainers([
  "2",
  "Objects and Classes",
  "5.77",
  "4.23",
  "Dictionaries",
  "4.62",
  "5.02",
  "RegEx",
  "2.88",
  "3.42",
  "Finish",
]);
