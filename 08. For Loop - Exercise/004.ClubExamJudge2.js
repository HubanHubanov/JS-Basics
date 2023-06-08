function club(input) {
  profitRequired = Number(input[0]);
  let curretProfit = 0;

  for (let i = 1; i < input.length; i += 2) {
    if (input[i] === "Party!") {
      console.log(`We need ${(profitRequired - curretProfit).toFixed(2)} leva more.`);
      break;
    }

    price = Number(input[i].length) * Number(input[i + 1]);

    if (price % 2 !== 0) {
      price = price * 0.75;
    }

    //console.log(price)

    curretProfit += price;

    if (curretProfit >= profitRequired) {
      console.log(`Target acquired.`);
      break;
    }
  }

  console.log(`Club income - ${curretProfit.toFixed(2)} leva.`);
}
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);
