function sumSeconds(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let c = Number(input[2]);
  let time = a + b + c;

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
    console.log("---------------");
    console.log(minutes + ":0" + seconds);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}

sumSeconds(["35", "45", "44"]);
