function cinemaTickets(input) {
  let index = 0;
  let currentInput = input[index];
  let studentCounter = 0;
  let standardCounter = 0;
  let kidCounter = 0;
  let counter = 0;

  while (currentInput !== "Finish") {
    let name = currentInput;
    index++;
    let seatsNumber = Number(input[index]);
    index++;
    let command = input[index];
    let counterMovie = 0;

    while (command !== "End") {
      let type = command;
      counterMovie++;
      counter++;

      if (type === "student") {
        studentCounter++;
      } else if (type === "standard") {
        standardCounter++;
      } else if (type === "kid") {
        kidCounter++;
      }

      if (counterMovie >= seatsNumber) {
        break;
      }

      index++;
      command = input[index];
    }
    index++;
    currentInput = input[index];

    console.log(`${name} - ${((counterMovie / seatsNumber) * 100).toFixed(2)}% full.`);
  }

  console.log(`Total tickets: ${counter}`);
  console.log(
    `${((studentCounter / counter) * 100).toFixed(2)}% student tickets`
  );
  console.log(
    `${((standardCounter / counter) * 100).toFixed(2)}% standart tickets`
  );
  console.log(`${((kidCounter / counter) * 100).toFixed(2)}% kids tickets`);
}

cinemaTickets([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish",
]);
