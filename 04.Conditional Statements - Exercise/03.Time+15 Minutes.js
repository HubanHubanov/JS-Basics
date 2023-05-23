function timePlus15minutes(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);
  let MinutesPlus15 = minutes + 15;

  if (MinutesPlus15 >= 60) {
    hours += 1;
    MinutesPlus15 = MinutesPlus15 % 60;
  }

  if (hours === 24) {
    hours = 0;
  }

  if (MinutesPlus15 < 10) {
    console.log(`${hours}:0${MinutesPlus15}`);
  } else {
    console.log(`${hours}:${MinutesPlus15}`);
  }
}

timePlus15minutes(["1", "46"]);
