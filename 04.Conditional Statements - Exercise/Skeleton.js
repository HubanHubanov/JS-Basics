function skeleton(input) {
  let minsNeeded = Number(input[0]);
  let secsNeeded = Number(input[1]);
  let lenghtMeters = Number(input[2]);
  let secsFor100eMeters = Number(input[3]);

  let timeNeededSecs = minsNeeded * 60 + secsNeeded;
  let timesDecreese = lenghtMeters / 120;
  let decreese = timesDecreese * 2.5;

  let timeForLenght = (lenghtMeters / 100) * secsFor100eMeters;
  let totalTime = timeForLenght - decreese;

  if (totalTime <= timeNeededSecs) {
    console.log(`Marin Bangiev won an Olympic quota!`);
    console.log(`His time is ${totalTime.toFixed(3)}.`);
  } else {
    console.log(
      `No, Marin failed! He was ${(totalTime - timeNeededSecs).toFixed(
        3
      )} second slower.`
    );
  }
}

skeleton(["2", "12", "1200", "10"]);
