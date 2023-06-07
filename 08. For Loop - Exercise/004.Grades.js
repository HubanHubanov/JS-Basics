function grades(input) {
  let studentsNum = Number(input[0]);
  let top = 0;
  let between4And499 = 0;
  let between3And399 = 0;
  let fail = 0;
  let gradesSum = 0;

  for (let i = 1; i < input.length; i++) {
    let grade = Number(input[i]);

    if (grade >= 5) {
      gradesSum += grade;
      top++;
    } else if (grade >= 4) {
      gradesSum += grade;
      between4And499++;
    } else if (grade >= 3) {
      gradesSum += grade;
      between3And399++;
    } else {
      gradesSum += grade;
      fail++;
    }
  }
  let topPercentage = (top / studentsNum) * 100;
  let between4And499Percentage = (between4And499 / studentsNum) * 100;
  let between3And399Percentage = (between3And399 / studentsNum) * 100;
  let failPercentage = (fail / studentsNum) * 100;
  let average = gradesSum / studentsNum;

  console.log(`Top students: ${topPercentage.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${between4And499Percentage.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${between3And399Percentage.toFixed(2)}%`);
  console.log(`Fail: ${failPercentage.toFixed(2)}%`);
  console.log(`Average: ${average.toFixed(2)}`);
}
grades(["10", "3", "2.99", "5.68", "3.01", "4", "4", "6", "4.5", "2.44", "5"]);
