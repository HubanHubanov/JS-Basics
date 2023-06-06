function cleverLily(input) {
  let age = Number(input[0]);
  let waschingMachineCost = Number(input[1]);
  let toyPrice = Number(input[2]);
  let moneyStolen = 0;
  let moneySaved = 0;
  let moneyAdd = 10;
  let toys = 0;

  for (i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      moneyStolen += 1;
      moneySaved += moneyAdd;
      moneyAdd += 10;
    } else {
      toys += 1;
    }
  }

  let toysSum = toys * toyPrice;
  let sum = moneySaved + toysSum - moneyStolen;

  if (sum >= waschingMachineCost) {
    console.log(`Yes! ${(sum - waschingMachineCost).toFixed(2)}`);
  } else {
    console.log(`No! ${(waschingMachineCost - sum).toFixed(2)}`);
  }
}

cleverLily(["10", "170.00", "6"]);
