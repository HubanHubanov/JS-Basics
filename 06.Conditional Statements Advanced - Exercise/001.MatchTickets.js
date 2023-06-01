function matchTickets(input) {
  let budget = Number(input[0]);
  let category = input[1];
  let numberPeople = Number(input[2]);
  let transport = 0;
  let ticketPriceTotal = 0;

  if (numberPeople <= 4) {
    transport = 0.75 * budget;
  } else if (numberPeople <= 9) {
    transport = 0.6 * budget;
  } else if (numberPeople <= 24) {
    transport = 0.5 * budget;
  } else if (numberPeople <= 49) {
    transport = 0.4 * budget;
  } else {
    transport = 0.25 * budget;
  }

  let moneyLeft = budget - transport;

  if (category === "Normal") {
    ticketPriceTotal = 249.99 * numberPeople;
  } else if (category === "VIP") {
    ticketPriceTotal = 499.99 * numberPeople;
  }

  if (moneyLeft >= ticketPriceTotal) {
    console.log(
      `Yes! You have ${(moneyLeft - ticketPriceTotal).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money! You need ${(ticketPriceTotal - moneyLeft).toFixed(2)} leva.`
    );
  }
}

matchTickets(["30000", "VIP", "49"]);
