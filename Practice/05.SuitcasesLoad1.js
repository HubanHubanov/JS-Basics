function suitcasesLoad(input) {
  index = 0;
  let freeVolume = Number(input[index]);
  index++;
  let currentInput = input[index];
  let suitcasesCounter = 0;
  let isFull = false;

  while (currentInput !== "End") {
    suitcasesCounter++;

    suitcaseVolume = Number(currentInput);

    if (suitcasesCounter % 3 === 0) {
      suitcaseVolume *= 1.1;
    }

    freeVolume -= suitcaseVolume;

    if (freeVolume < 0) {
      suitcasesCounter--;
      isFull = true;
      console.log(`No more space!`);
      break;
    }

    index++;
    currentInput = input[index];
  }

  if (!isFull) {
    console.log(`Congratulations! All suitcases are loaded!`);
  }

  console.log(`Statistic: ${suitcasesCounter} suitcases loaded.`);
}

suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
