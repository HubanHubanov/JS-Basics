function familyTrip(input) {
  let budget = Number(input[0]);
  let numberNights = Number(input[1]);
  let priceNights = Number(input[2]);
  let percentageExtraCost = Number(input[3]);

  if (numberNights > 7) {
    priceNights = 0.95 * priceNights;
  }
  let nightsCost = numberNights * priceNights;
  let extraCostSum = (percentageExtraCost / 100) * budget;

  let totalCost = nightsCost + extraCostSum;

  if (budget >= totalCost) {
    console.log(
      `Ivanovi will be left with ${(budget - totalCost).toFixed(
        2
      )} leva after vacation.`
    );
  } else {
    console.log(`${(totalCost - budget).toFixed(2)} leva needed.`);
  }
}

familyTrip(["800.50", "8", "100", "2"]);
