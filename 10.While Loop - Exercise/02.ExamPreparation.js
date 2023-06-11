function examPreparation(input) {
  let index = 0;
  let badGradesAllowed = Number(input[index]);
  index++;

  let command = input[index];
  index++;

  let grade = Number(input[index]);
  index++;

  let score = 0;
  let problemsCount = 0;
  let buff = 0;

  let badGradesCount = 0;

  let needBreak = false;

  while (command !== "Enough") {
    score += grade;
    problemsCount++;
    buff = command;

    if (grade <= 4) {
      badGradesCount++;
      if (badGradesCount === badGradesAllowed) {
        needBreak = true;
        console.log(`You need a break, ${badGradesCount} poor grades.`);
        break;
      }
    }

    command = input[index];
    index++;

    if (command === "Enough") {
      buff;
    }

    grade = Number(input[index]);
    index++;
  }

  let avgScore = score / problemsCount;
  if (!needBreak) {
    console.log(`Average score: ${avgScore.toFixed(2)}`);
    console.log(`Number of problems: ${problemsCount}`);
    console.log(`Last problem: ${buff}`);
  }
}

examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
