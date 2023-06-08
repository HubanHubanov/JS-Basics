function club(input) {
  profitRequired = Number(input[0]);
  let profit = 0;
 

  for ( let i = 1; i < input.length; i++) {

    if (input[i] === "Party!") {
      console.log(`We need ${(profitRequired - profit).toFixed(2)} leva more.`);
      break;
    }

    if (i % 2 !== 0) {
     let  price = Number(input[i].length * Number(input[i + 1]));
      if (Number(input[i].length * Number(input[i + 1])) % 2 !== 0) {
        price *= 0.75;
      }
      profit += price
    }

    if (profit >= profitRequired) {
      console.log(`Target acquired.`);
      break;
    }
  }

  console.log(`Club income - ${profit.toFixed(2)} leva.`);

}
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);
