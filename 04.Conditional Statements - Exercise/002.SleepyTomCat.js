function sleepyTomCat(input) {
  let daysOff = Number(input[0]);

  let targetSleep = 30000;

  let daysWork = 365 - daysOff;

  daysOffPlayTime = daysOff * 127;
  daysWorkPlayTime = daysWork * 63;
  totalPlayTime = daysOffPlayTime + daysWorkPlayTime;

  if (totalPlayTime > targetSleep) {
    let difference = totalPlayTime - targetSleep;
    let differenceHours = Math.floor(difference / 60);
    let differenceMins = difference % 60;

    console.log("Tom will run away");
    console.log(
      `${differenceHours} hours and ${differenceMins} minutes more for play`
    );
  } else {
    let difference = targetSleep - totalPlayTime;
    let differenceHours = Math.floor(difference / 60);
    let differenceMins = difference % 60;

    console.log("Tom sleeps well");
    console.log(
      `${differenceHours} hours and ${differenceMins} minutes less for play`
    );
  }
}

sleepyTomCat(["20"]);
