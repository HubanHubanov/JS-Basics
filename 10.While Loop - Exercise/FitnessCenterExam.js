function fitnessCenter(input) {
  let index = 0;
  let peopleNumber = Number(input[index]);
  index++;

  let casesChecked = 0;

  let back = 0;
  let chest = 0;
  let legs = 0;
  let abs = 0;
  let proteinShake = 0;
  let proteinBar = 0;
  let workOut = 0;
  let protein = 0;

  while (casesChecked < peopleNumber) {
    let activity = input[index];
    index++;

    casesChecked++;

    if (activity === "Back") {
      back++;
      workOut++;
    } else if (activity === "Chest") {
      chest++;
      workOut++;
    } else if (activity === "Legs") {
      legs++;
      workOut++;
    } else if (activity === "Abs") {
      abs++;
      workOut++;
    } else if (activity === "Protein shake") {
      proteinShake++;
      protein++;
    } else if (activity === "Protein bar") {
      proteinBar++;
      protein++;
    }
  }
  let workOutPerc = (workOut / peopleNumber) * 100;
  let proteinPerc = (protein / peopleNumber) * 100;

  console.log(`${back} - back`);
  console.log(`${chest} - chest`);
  console.log(`${legs} - legs`);
  console.log(`${abs} - abs`);
  console.log(`${proteinShake} - protein shake`);
  console.log(`${proteinBar} - protein bar`);
  console.log(`${workOutPerc.toFixed(2)}% - work out`);
  console.log(`${proteinPerc.toFixed(2)}% - protein`);
}

fitnessCenter(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"])
