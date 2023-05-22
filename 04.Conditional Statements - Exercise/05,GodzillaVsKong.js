function godzillaVsKong(input) {
  let budget = Number(input[0]);
  let extras = Number(input[1]);
  let extrasClothesCost = Number(input[2]);
  let decor = 0.1 * budget;
  let extrasTotalCost = extras * extrasClothesCost;

  if (extras > 150) {
    extrasTotalCost = 0.9 * extrasTotalCost;
  }

  cost = extrasTotalCost + decor;

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

godzillaVsKong(["20000", "120", "55.5"]);
