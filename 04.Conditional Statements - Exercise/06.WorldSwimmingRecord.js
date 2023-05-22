function worldSwimmingRecord(input) {
  let record = Number(input[0]);
  let distance = Number(input[1]);
  let timeFor1m = Number(input[2]);

  let time = distance * timeFor1m;

  let slowingDown = Math.floor(distance / 15) * 12.5;
  let totalTime = time + slowingDown;

  if (totalTime < record) {
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime.toFixed(
        2
      )} seconds.`
    );
  } else {
    console.log(
      `No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`
    );
  }
}

worldSwimmingRecord(["55555.67", "3017", "5.03"]);
