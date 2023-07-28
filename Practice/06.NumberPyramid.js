function numberPyramid(input) {
  let maxNum = Number(input[0]);
  let curNum = 1;
  let curRow = 1;
  let numsPerRow = 0;
  let result = "";

  while (curNum <= maxNum) {
    if (numsPerRow < curRow) {
      result += curNum + " ";
      numsPerRow++;
    } else {
      result += "\n" + curNum + " ";
      numsPerRow = 1;
      curRow++;
    }

    curNum++;
  }

  console.log(result);
}

numberPyramid("7");
