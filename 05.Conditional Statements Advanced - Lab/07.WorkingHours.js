function workingHours(input) {
  let hour = Number(input[0]);
  let day = input[1];

  if (hour < 10) {
    console.log("closed");
  } else if (hour > 18) {
    console.log("closed");
  } else {
    switch (day) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
      case "Saturday":
        console.log("open");
        break;
      case "Sunday":
        console.log("closed");
        break;
    }
  }
}

workingHours(["19", "Sunday"]);
