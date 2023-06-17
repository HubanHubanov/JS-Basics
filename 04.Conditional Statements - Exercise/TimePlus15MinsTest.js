function timePlus15Mins(input) {
  let hours = Number(input[0]);
  let mins = Number(input[1]);

  let hoursInMins = hours * 60;
  let timePlus15Mins = hoursInMins + mins + 15;

  let timePlus15MinsHours = Math.floor(timePlus15Mins / 60);
  let timePlus15MinsMins = timePlus15Mins % 60;

  if (timePlus15MinsHours > 23) {
    timePlus15MinsHours = 0;
  }

  if (timePlus15MinsMins < 10) {
    console.log(`${timePlus15MinsHours}:0${timePlus15MinsMins}`);
  } else {
    console.log(`${timePlus15MinsHours}:${timePlus15MinsMins}`);
  }
}

timePlus15Mins(["23", "59"]);
