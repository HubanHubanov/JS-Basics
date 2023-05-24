function easterGuests(input) {
  let guests = Number(input[0]);
  let budget = Number(input[1]);

  let cakePrice = 4;
  let eggPrice = 0.45;

  let cakesNeeded = Math.ceil(guests / 3);
  let eggsNeeded = 2 * guests;
  let totalCost = cakesNeeded * cakePrice + eggsNeeded * eggPrice;

  if (budget >= totalCost) {
    console.log(
      `Lyubo bought ${cakesNeeded} Easter bread and ${eggsNeeded} eggs.`
    );
    console.log(`He has ${(budget - totalCost).toFixed(2)} lv. left.`);
  } else {
    console.log(`Lyubo doesn't have enough money.`);
    console.log(`He needs ${(totalCost - budget).toFixed(2)} lv. more.`);
  }
}

easterGuests(["9", "12"]);
