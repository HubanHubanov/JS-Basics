function exam(input) {
  let studentsNumber = Number(input[0]);
  let top = 0;
  let between400and499 = 0;
  let between300and399 = 0;
  let fail = 0;
  let gradeSum = 0;

  for (let i = 1; i < input.length; i++) {
    let grade = Number(input[i]);

    if (grade >= 5) {
      top++;
      gradeSum += grade;
    } else if (grade >= 4) {
      between400and499++;
      gradeSum += grade;
    } else if (grade >= 3) {
      between300and399++;
      gradeSum += grade;
    } else {
      fail++;
      gradeSum += grade;
    }
  }
  let topPerc = (top / studentsNumber) * 100;
  let between400and499Perc = (between400and499 / studentsNumber) * 100;
  let between300and399Perc = (between300and399 / studentsNumber) * 100;
  let failPerc = (fail / studentsNumber) * 100;
  let avg = gradeSum / studentsNumber;

  console.log(`Top students: ${topPerc.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${between400and499Perc.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${between300and399Perc.toFixed(2)}%`);
  console.log(`Fail: ${failPerc.toFixed(2)}%`);
  console.log(`Average: ${avg.toFixed(2)}`);
}

exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])	
