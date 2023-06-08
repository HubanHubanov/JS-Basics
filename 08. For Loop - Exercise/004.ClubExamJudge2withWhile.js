function club(input) {

  let desiredProfit = Number(input[0]);
  let target = desiredProfit;
  let currentProfit = 0;
  let i = 1;

  while (target > 0) {

    if (input[i] == "Party!") {
      let diff = desiredProfit - currentProfit;
      console.log(`We need ${diff.toFixed(2)} leva more.`);
      break;
    }

    let cocktailsPrice = Number(input[i].length) * Number(input[i + 1]);

    if (cocktailsPrice % 2 !== 0) {
      cocktailsPrice = cocktailsPrice * 0.75;
    }

    currentProfit += cocktailsPrice;
    target -= cocktailsPrice;
    
    if (currentProfit >= desiredProfit) {
      console.log("Target acquired.");
      break;
    }

    // console.log(currentProfit);
    i += 2;
  }

  console.log(`Club income - ${currentProfit.toFixed(2)} leva.`)

}

club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"]);