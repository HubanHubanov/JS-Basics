function steps(input) {
  let index = 0;
  let command = input[index];
  index++;

  let stepsTotal = 0;
  let steps = 0;

  while (stepsTotal <= 10000) {
    if (command === "Going home") {
      stepsTotal += Number(input[index]);
    
      if (stepsTotal >= 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${stepsTotal - 10000} steps over the goal!`);
        break;
      } else {
        console.log(`${10000 - stepsTotal} more steps to reach goal.`);
        break;
      }
    } else {
      steps = Number(command);
      stepsTotal += steps;
    }

    if (stepsTotal >= 10000) {
      console.log(`Goal reached! Good job!`);
      console.log(`${stepsTotal - 10000} steps over the goal!`);
      break;
    }

    command = input[index];
    index++;
  }
}


steps(["1000",
"1500",
"2000",
"6500"])

