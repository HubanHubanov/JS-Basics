function oscars(input) {
  let name = input[0];
  let screen = input[1];
  let ticketsNum = Number(input[2]);
  let ticketPrice = 0;

  switch (name) {
    case "A Star Is Born":
      switch (screen) {
        case "normal":
          ticketPrice = 7.5;
          break;

        case "luxury":
          ticketPrice = 10.5;
          break;

        case "ultra luxury":
          ticketPrice = 13.5;
          break;
      }

      break;

    case "Bohemian Rhapsody":
      switch (screen) {
        case "normal":
          ticketPrice = 7.35;
          break;

        case "luxury":
          ticketPrice = 9.45;
          break;

        case "ultra luxury":
          ticketPrice = 12.75;
          break;
      }

      break;

    case "Green Book":
      switch (screen) {
        case "normal":
          ticketPrice = 8.15;
          break;

        case "luxury":
          ticketPrice = 10.25;
          break;

        case "ultra luxury":
          ticketPrice = 13.25;
          break;
      }

      break;

    case "The Favourite":
      switch (screen) {
        case "normal":
          ticketPrice = 8.75;
          break;

        case "luxury":
          ticketPrice = 11.55;
          break;

        case "ultra luxury":
          ticketPrice = 13.95;
          break;
      }

      break;
  }

  let income = ticketPrice * ticketsNum;
  console.log(`${name} -> ${income.toFixed(2)} lv.`);
}

oscars(["Green Book", "normal", "63"]);
