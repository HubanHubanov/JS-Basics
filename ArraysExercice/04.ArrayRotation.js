function arrayRotation(arr, numRotation) {
  let rotation = 0;
  let resArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    rotation++;

    if (rotation <= numRotation) {
      arr.push(currNum);
    } else {
      break;
    }
    console.log(arr);
  }

  for (let s = numRotation; s < arr.length; s++) {
    resArr.push(arr[s]);
  }

  console.log(resArr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);
console.log("---------------");
arrayRotation([32, 21, 61, 1], 4);
console.log("---------------");
arrayRotation([2, 4, 15, 31], 5);
