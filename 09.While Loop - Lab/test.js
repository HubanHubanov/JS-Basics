function graduation(input) {
  let index = 0;
  let name = input[index];
  index++;
  let grade = Number(input[index]);
  index++;
  let year = 1;
  let gradesSum = 0;

  let failed = 0;

  let hasExluded = false;

  while (year <= 12) {
    if (grade < 4) {
      failed++;
      if (failed > 1) {
        hasExluded = true;
        console.log(`${name} has been excluded at ${year} grade`);
        break;
      }
      continue;
    }

    gradesSum += grade;
    year += 1;
    grade = Number(input[index]);
    index++;
  }
  if (!hasExluded) {
    let gradeAvg = gradesSum / 12;
    console.log(`${name} graduated. Average grade: ${gradeAvg.toFixed(2)}`);
  }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
