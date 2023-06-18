function solve(input) {
  let pairs = input[0];
  let isEqual = true; // we only need 1 case to be false to return false;
  let maxDiff = 0;
  let sum = 0;

  for (let i = 1; i < input.length; i += 2) {
    let tempSum = 0; // resets on every iteration
    let tempDifference = 0; //resets on every iteration
    tempSum = Number(input[i]) + Number(input[i + 1]);

    if (i > 1) { //to skip first iteration of the for loop, we only need the sum of element 1 + element 2, not looking for difference
      if (tempSum !== sum) {
        isEqual = false;
        tempDifference = Math.abs(tempSum - sum); // checks difference on every iteration after first iteration
        if (tempDifference > maxDiff) { //compare and set maxDifference
          maxDiff = tempDifference;
        }
      }
    }

    sum = tempSum; //important, we need the sum on every iteration;
  }
  if (isEqual) {
    console.log(`Yes, value=${sum}`);
  } else {
    console.log(`No, maxdiff=${maxDiff}`);
  }
}
solve([4, 1, 1, 3, 1, 2, 2, 0, 0]);
