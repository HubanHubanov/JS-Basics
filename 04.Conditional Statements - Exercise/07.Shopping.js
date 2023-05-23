function shopping(input) {
  let budget = Number(input[0]);
  let videocardsNum = Number(input[1]);
  let cpuNum = Number(input[2]);
  let ramNum = Number(input[3]);

  let videocardPrice = 250;
  let videocardsCost = videocardsNum * videocardPrice;
  let cpuPrice = 0.35 * videocardsCost;
  let cpuCost = cpuNum * cpuPrice;
  let ramPrice = 0.1 * videocardsCost;
  let ramCost = ramNum * ramPrice;

  let totalCost = videocardsCost + cpuCost + ramCost;

  if (videocardsNum > cpuNum) {
    totalCost = 0.85 * totalCost;
  }

  if (budget >= totalCost) {
    console.log(`You have ${(budget - totalCost).toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${(totalCost - budget).toFixed(2)} leva more!`
    );
  }
}

shopping(["920.45", "3", "1", "1"]);
