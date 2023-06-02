function solve(input) {
  let budget = Number(input[0]);
  let extrasNum = Number(input[1]);
  let clothesPrice = Number(input[2]);
  let decor = 0.1 * budget;

  if (extrasNum > 150) {
    clothesPrice *= 0.9;
  }
  let cost = extrasNum * clothesPrice + decor;

  if (cost > budget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${(cost - budget).toFixed(2)} leva more.`);
  } else {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${(budget - cost).toFixed(2)} leva left.`
    );
  }
}

solve(["9587.88", "222", "55.68"]);
