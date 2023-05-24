function GvsK(input) {
  let budget = Number(input[0]);
  let extras = Number(input[1]);
  let clothes1 = Number(input[2]);

  let decor = 0.1 * budget;
  let extrasCost = extras * clothes1;

  if (extras > 150) {
    extrasCost = 0.9 * extrasCost;
  }
  let totalCost = decor + extrasCost;

  if (budget >= totalCost) {
    console.log(`Action!`);
    console.log(
      `Wingard starts filming with ${(budget - totalCost).toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`);
  }
}

GvsK(["20000", "120", "55.5"]);
