function easterParty(input) {
  let guests = Number(input[0]);
  let costOnePerson = Number(input[1]);
  let budget = Number(input[2]);

  let cake = 0.1 * budget;

  if (guests < 10) {
    costOnePerson;
  } else if (guests <= 15) {
    costOnePerson *= 0.85;
  } else if (guests <= 20) {
    costOnePerson *= 0.8;
  } else {
    costOnePerson *= 0.75;
  }

  let totalCost = guests * costOnePerson + cake;

  if (budget >= totalCost) {
    console.log(
      `It is party time! ${(budget - totalCost).toFixed(2)} leva left.`
    );
  } else {
    console.log(`No party! ${(totalCost - budget).toFixed(2)} leva needed.`);
  }
}

easterParty(["24", "35", "550"]);
