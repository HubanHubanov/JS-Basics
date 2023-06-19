function sumOfTwoNUmbers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNum = Number(input[2]);
  let counter = 0;
  let flag = false;
  let x = 0;
  let y = 0;

  for (let x = start; x <= end; x++) {
    for (let y = start; y <= end; y++) {
      counter++;
      if (x + y === magicNum) {
        flag = true;
        console.log(`Combination N:${counter} (${x} + ${y} = ${magicNum})`);
        break;
      }
    }
    if (flag) {
      break;
    }
  }

  if (!flag) {
    console.log(`${counter} combinations - neither equals ${magicNum}`);
  }
}

sumOfTwoNUmbers(["88", "888", "2000"]);
