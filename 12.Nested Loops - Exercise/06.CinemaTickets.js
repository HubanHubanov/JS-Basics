function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  let studentCount = 0;
  let standardCount = 0;
  let kidCount = 0;
  let isFinish = false;

  while (command !== "Finish") {
    let name = command;
    index++;
    let seatsNumber = Number(input[index]);
    index++;
    let tempCommand = input[index];
    let tempCount = 0;

    while (tempCommand !== "End") {
      if (tempCommand === "Finish") {
        isFinish = true;
        break;
      }

      let type = tempCommand;
      if (type === "student") {
        studentCount++;
      } else if (type === "standard") {
        standardCount++;
      } else if (type === "kid") {
        kidCount++;
      }
      tempCount++;

      if (tempCount === seatsNumber) {
        break;
      }

      index++;
      tempCommand = input[index];
    }

    let percFull = (tempCount / seatsNumber) * 100;
    console.log(`${name} - ${percFull.toFixed(2)}% full.`);

    index++;
    command = input[index];

    if (isFinish) {
      break;
    }
  }

  let totalTickets = standardCount + studentCount + kidCount;
  let studentPerc = (studentCount / totalTickets) * 100;
  let standardPerc = (standardCount / totalTickets) * 100;
  let kidPerc = (kidCount / totalTickets) * 100;

  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${studentPerc.toFixed(2)}% student tickets.`);
  console.log(`${standardPerc.toFixed(2)}% standard tickets.`);
  console.log(`${kidPerc.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Shutter Island",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Rush",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Deadpool",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Finish"
  
]);
