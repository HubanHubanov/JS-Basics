function agencyProfit(input) {
  let name = input[0];
  let ticketsNumAdult = Number(input[1]);
  let ticketsNumKids = Number(input[2]);
  let ticketPriceAdult = Number(input[3]);
  let serviceTax = Number(input[4]);

  let ticketPriceKid = 0.3 * ticketPriceAdult;
  let ticketPriceAdultTotal = ticketPriceAdult + serviceTax;
  let ticketPriceKidTotal = ticketPriceKid + serviceTax;
  let totalIncome =
    ticketPriceAdultTotal * ticketsNumAdult +
    ticketPriceKidTotal * ticketsNumKids;
  let agencyProfit = 0.2 * totalIncome;

  console.log(
    `The profit of your agency from ${name} tickets is ${agencyProfit.toFixed(
      2
    )} lv.`
  );
}

agencyProfit(["WizzAir", "15", "5", "120", "40"]);
