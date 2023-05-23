function sumSeconds(input) {
  let time1 = Number(input[0]);
  let time2 = Number(input[1]);
  let time3 = Number(input[2]);

  let totalTime = time1 + time2 + time3;

  let hours = Math.floor(totalTime / 60);
  let minutes = totalTime % 60;

  if (minutes < 10) {
    console.log(`${hours}:0${minutes}`);
  } else {
    console.log(`${hours}:${minutes}`);
  }
}

sumSeconds(["14", "12", "10"]);
