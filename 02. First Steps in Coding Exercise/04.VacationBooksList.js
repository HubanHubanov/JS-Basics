function vacationBooksList(input) {
  let bookPages = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let daysForBook = Number(input[2]);
  let timeToReadTheBook = bookPages / pagesPerHour;
  let hoursPerDay = timeToReadTheBook / daysForBook;

  console.log(hoursPerDay);
}

vacationBooksList(["212", "20", "2"]);
