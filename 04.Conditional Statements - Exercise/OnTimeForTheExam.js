function onTimeForTheExam(input) {
  let examHour = Number(input[0]);
  let examMins = Number(input[1]);
  let arrivalHour = Number(input[2]);
  let arrivalMins = Number(input[3]);

  let examInMins = examHour * 60 + examMins;
  let arrivalInMins = arrivalHour * 60 + arrivalMins;

  //console.log(examInMins);
  //console.log(arrivalInMins);

  if (arrivalInMins <= examInMins && examInMins - arrivalInMins <= 30) {
    console.log("On time");
  } else if (arrivalInMins < examInMins && examInMins - arrivalInMins > 30) {
    console.log("Early");
  } else if (arrivalInMins > examInMins) {
    console.log("Late");
  }

  if (examInMins !== arrivalInMins) {
    if (examInMins > arrivalInMins && examInMins - arrivalInMins < 60) {
      console.log(`${examInMins - arrivalInMins} minutes before the start`);
    } else if (examInMins - arrivalInMins >= 60) {
      let hoursEarly = Math.floor((examInMins - arrivalInMins) / 60);
      let minsEarly = (examInMins - arrivalInMins) % 60;
      if (minsEarly < 10) {
        console.log(`${hoursEarly}:0${minsEarly} hours before the start`);
      } else {
        console.log(`${hoursEarly}:${minsEarly} hours before the start`);
      }
    } else if (arrivalInMins > examInMins && arrivalInMins - examInMins < 60) {
      console.log(`${arrivalInMins - examInMins} minutes after the start`);
    } else if (arrivalInMins - examInMins >= 60) {
      let hoursLate = Math.floor((arrivalInMins - examInMins) / 60);
      let minsLate = (arrivalInMins - examInMins) % 60;
      if (minsLate < 10) {
        console.log(`${hoursLate}:0${minsLate} hours after the start" `);
      } else {
        console.log(`${hoursLate}:${minsLate} hours after the start" `);
      }
    }
  }
}

onTimeForTheExam(["9", "30", "9", "50"]);
