function oldBooks(input) {
  let index = 0;

  let bookNeeded = input[index];
  index++;

  let currentBook = input[index];
  index++;

  let booksChecked = 0;

  let foundTheBook = false;

  while (bookNeeded !== currentBook) {
    if (currentBook === "No More Books") {
      foundTheBook = true;
      console.log("The book you search is not here!");
      console.log(`You checked ${booksChecked} books.`);
      break;
    }

    currentBook = input[index];
    index++;

    booksChecked++;
  }
  if (!foundTheBook) {
    console.log(`You checked ${booksChecked} books and found it.`);
  }
}

oldBooks([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
