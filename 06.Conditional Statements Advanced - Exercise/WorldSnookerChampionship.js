function worldSnookerChampionship(input) {
  let stage = input[0];
  let ticketType = input[1];
  let ticketsNum = Number(input[2]);
  let pic = input[3];
  let ticket = 0;

  if (stage === "Quarter final") {
    if (ticketType === "Standard") {
      ticket = 55.5;
    } else if (ticketType === "Premium") {
      ticket = 105.2;
    } else if (ticketType === "VIP"){
    ticket = 118.9;
    }
  } else if (stage === "Semi final") {
    if (ticketType === "Standard") {
      ticket = 75.88;
    } else if (ticketType === "Premium") {
      ticket = 125.22;
    } else if (ticketType === "VIP"){
    ticket = 300.4;
    }
  } else if (stage === "Final") {
    if (ticketType === "Standard") {
      ticket = 110.1;
    } else if (ticketType === "Premium") {
      ticket = 160.66;
    } else if (ticketType === "VIP") {
      ticket = 400;
    }
  }

  let totalTicket = ticketsNum * ticket;

  if (totalTicket > 4000) {
    totalTicket *= 0.75;
  } else if (totalTicket > 2500) {
    totalTicket *= 0.9;
  }

  if (pic === `Y` && totalTicket <= 4000) {
    totalTicket += 40 * ticketsNum;
  }

  console.log(totalTicket.toFixed(2));
}

worldSnookerChampionship(["Quarter final", "Standard", "11", "N"]);
