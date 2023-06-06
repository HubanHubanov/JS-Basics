function hospital(input) {
  let period = Number(input[0]);
  let treated = 0;
  let untreated = 0;
  let doctorsNumber = 7;

  for (let i = 1; i < input.length; i++) {
    let patients = Number(input[i]);

    if (i % 3 !== 0) {
      if (patients <= doctorsNumber) {
        treated += patients;
      } else if (patients > doctorsNumber) {
        treated += doctorsNumber;
        untreated += patients - doctorsNumber;
      }
    } else if (i % 3 === 0) {
      if (treated >= untreated) {
        if (patients <= doctorsNumber) {
          treated += patients;
        } else if (patients > doctorsNumber) {
          treated += doctorsNumber;
          untreated += patients - doctorsNumber;
        }
      } else if (untreated > treated) {
        doctorsNumber++;
        if (patients <= doctorsNumber) {
          treated += patients;
        } else if (patients > doctorsNumber) {
          treated += doctorsNumber;
          untreated += patients - doctorsNumber;
        }
      }
    }
  }

  console.log(`Treated patients: ${treated}.`);
  console.log(`Untreated patients: ${untreated}.`);
}

hospital(["6", "25", "25", "25", "25", "25", "2"]);
