function mountainRun(input) {
  let recordSeconds = Number(input[0]);
  let distanceMeters = Number(input[1]);
  let timeForOneMeter = Number(input[2]);

  let timeForDistance = distanceMeters * timeForOneMeter;
  let delayTimes = Math.floor(distanceMeters / 50);
  let totalDelay = delayTimes * 30;
  let totalTime = timeForDistance + totalDelay;

  if (recordSeconds > totalTime) {
    console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
  } else {
    console.log(
      `No! He was ${(totalTime - recordSeconds).toFixed(2)} seconds slower.`
    );
  }
}

mountainRun(["1377", "389", "3"]);
