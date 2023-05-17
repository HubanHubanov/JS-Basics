function oscarsCeremony(input) {
  let rent = Number(input[0]);

  let statues = Number(rent - 0.3 * rent);
  let catering = Number(statues - 0.15 * statues);
  let sound = Number(0.5 * catering);

  let totalCost = rent + statues + catering + sound;
  let totalCostRound = totalCost.toFixed(2);

  console.log(totalCostRound);
}

oscarsCeremony(["3500"]);
