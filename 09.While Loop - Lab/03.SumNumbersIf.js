function sum(input) {
  let sum = Number(input[0]);
  let sumNum = 0;

  for (let i = 1; i < input.length; i++) {
    let num = Number(input[i]);

    sumNum += num;
  }

  if (sumNum >= sum) {
    console.log(sumNum);
  }
}

sum(["20", "1", "2", "3", "4", "5", "6"]);
