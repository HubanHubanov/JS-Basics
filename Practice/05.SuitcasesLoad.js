function suitcasesLoad(input) {
  let index = 0;
  let freeSpace = Number(input[index]);
  index++;
  let currentInput = input[index];
  let usedVolume = 0;
  let suitcasesCounter = 0;

  let isFull = false;

  while (currentInput !== "End") {
    suitcasesCounter++;

    let suitcaseVolume = Number(currentInput);

    if (suitcasesCounter % 3 === 0) {
      suitcaseVolume *= 1.1;
    }

    usedVolume += suitcaseVolume;

    if (usedVolume > freeSpace) {
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

suitcasesLoad(["550", "100", "252", "72", "End"]);
