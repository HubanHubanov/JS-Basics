function booksTest(input) {
    let numberPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let timeToReadTheBook = numberPages / pagesPerHour;
    let hoursPerDay = timeToReadTheBook / days;

    console.log(hoursPerDay);

}

booksTest(["212", "20", "2"]);