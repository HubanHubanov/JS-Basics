function sumSecondsTest(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let num3 = Number(input[2]);

  let sum = num1 + num2 + num3;

  let hours = Math.floor(sum / 60);
  let mins = sum % 60;

  if (mins < 10) {
    console.log(`${hours}:0${mins}`);
  } else {
    console.log(`${hours}:${mins}`);
  }
}

sumSecondsTest(["35", "45", "44"]);
