function movieProfit(input) {
  let name = input[0];
  let days = Number(input[1]);
  let ticketsPerDay = Number(input[2]);
  let ticketPrice = Number(input[3]);
  let percentForCinema = Number(input[4]);

  let income = days * ticketsPerDay * ticketPrice;
  let moneyForCimena = percentForCinema * 0.01 * income;
  let profit = income - moneyForCimena;
  let profitFix = profit.toFixed(2);

  console.log(`The profit from the movie ${name} is ${profitFix} lv.`);
}

movieProfit(["The Programmer", "20", "500", "7.50", "7"]);
