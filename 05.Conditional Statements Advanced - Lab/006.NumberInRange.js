function numberInRange(input) {
  num = Number(input[0]);

  if (-100 <= num && num <= 100 && num !== 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

numberInRange(["101"]);
