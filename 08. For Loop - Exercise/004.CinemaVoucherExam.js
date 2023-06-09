function cinemaVoucher(input) {
  let voucher = Number(input[0]);
  let ticketsCounter = 0;
  let itemsCounter = 0;
  let cost = 0;
  let price = 0;

  for (let i = 1; i < input.length; i++) {
    text = input[i];

    if (text === "End") {
      break;
    }

    if (text.length > 8) {
      price = text[0].charCodeAt(text[0]) + text[1].charCodeAt(text[1]);
      cost += price;

      if (cost > voucher) {
        break;
      }
      ticketsCounter++;
    } else {
      price = text[0].charCodeAt(text[0]);
      cost += price;

      if (cost > voucher) {
        break;
      }
      itemsCounter++;
    }
  }

  console.log(ticketsCounter);
  console.log(itemsCounter);
}
cinemaVoucher([
  "1500",
  "Avengers: Endgame",
  "Bohemian Rhapsody",
  "Deadpool 2",
  "End",
]);
