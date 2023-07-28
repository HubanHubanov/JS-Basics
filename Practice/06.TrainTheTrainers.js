function trainTheTrainers(input) {
  let index = 0;
  let judgesNumber = Number(input[index]);

  let totalGradeSum = 0;
  let examsCounter = 0;

  index++;
  let currentInput = input[index];

  while (currentInput !== "Finish") {
    examsCounter++;
    let examName = currentInput;
    let tempGradeSum = 0;

    for (let i = 1; i <= judgesNumber; i++) {
      index++;
      let grade = Number(input[index]);
      tempGradeSum += grade;
    }
    totalGradeSum += tempGradeSum;

    index++;
    currentInput = input[index];

    console.log(`${examName} - ${(tempGradeSum / judgesNumber).toFixed(2)}.`);
  }

  console.log(
    `Student's final assessment is ${(
      totalGradeSum /
      (examsCounter * judgesNumber)
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
