function filmPremiere(input) {
  let movie = input[0];
  let package = input[1];
  let ticketsNum = Number(input[2]);
  let price = 0;

  switch (movie) {
    case "John Wick":
      switch (package) {
        case "Drink":
          price = 12.0;
          break;

        case "Popcorn":
          price = 15.0;
          break;

        case "Menu":
          price = 19.0;
          break;
      }
      break;

    case "Star Wars":
      switch (package) {
        case "Drink":
          price = 18.0;
          break;

        case "Popcorn":
          price = 25.0;
          break;

        case "Menu":
          price = 30.0;
          break;
      }
      break;

    case "Jumanji":
      switch (package) {
        case "Drink":
          price = 9.0;
          break;

        case "Popcorn":
          price = 11.0;
          break;

        case "Menu":
          price = 14.0;
          break;
      }
      break;
  }

  if (movie === "Star Wars" && ticketsNum >= 4) {
    price *= 0.7;
  }

  if (movie === "Jumanji" && ticketsNum === 2) {
    price *= 0.85;
  }
  let totalPrice = price * ticketsNum;

  console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);
}

filmPremiere(["John Wick", "Drink", "6"]);
