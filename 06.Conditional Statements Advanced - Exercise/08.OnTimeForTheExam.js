function onTimeForTheExam(input) {
  let hourExam = Number(input[0]);
  let minuteExam = Number(input[1]);
  let hourArrive = Number(input[2]);
  let minuteArrive = Number(input[3]);

  let examInMinutes = hourExam * 60 + minuteExam;
  let arriveInMinutes = hourArrive * 60 + minuteArrive;

  if (arriveInMinutes > examInMinutes) {
    console.log("Late");
  } else if (
    arriveInMinutes <= examInMinutes &&
    examInMinutes - arriveInMinutes <= 30
  ) {
    console.log("On time");
  } else if (arriveInMinutes < examInMinutes - 30) {
    console.log("Early");
  }

  if (arriveInMinutes === examInMinutes) {
  } else if (
    examInMinutes - arriveInMinutes < 60 &&
    examInMinutes > arriveInMinutes
  ) {
    console.log(`${examInMinutes - arriveInMinutes} minutes before the start`);
  } else if (examInMinutes - arriveInMinutes >= 60) {
    let earlyHours = Math.trunc((examInMinutes - arriveInMinutes) / 60);
    let earlyMins = (examInMinutes - arriveInMinutes) % 60;
    if ((examInMinutes - arriveInMinutes) % 60 < 10) {
      console.log(`${earlyHours}:0${earlyMins} hours before the start`);
    } else {
      console.log(`${earlyHours}:${earlyMins} hours before the start`);
    }
  } else if (arriveInMinutes - examInMinutes < 60) {
    console.log(`${arriveInMinutes - examInMinutes} minutes after the start`);
  } else if (arriveInMinutes - examInMinutes >= 60) {
    let lateHours = Math.trunc((arriveInMinutes - examInMinutes) / 60);
    let lateMins = (arriveInMinutes - examInMinutes) % 60;
    if ((arriveInMinutes - examInMinutes) % 60 < 10) {
      console.log(`${lateHours}:0${lateMins} hours after the start`);
    } else {
      console.log(`${lateHours}:${lateMins} hours after the start`);
    }
  }
}
onTimeForTheExam(["11", "30", "12", "29"]);
