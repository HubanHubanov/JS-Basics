function series(input) {
  let index = 0;
  let budget = Number(input[index]);
  index++;
  let numberSeries = Number(input[index]);
  index++;
  let seriesChecked = 0;

  let name = 0;
  let cost = 0;
  let totalCost = 0;

  while (seriesChecked < numberSeries) {
    name = input[index];
    index++;
    cost = Number(input[index]);
    index++;

    seriesChecked++;

    if (name === "Thrones") {
      cost *= 0.5;
    } else if (name === "Lucifer") {
      cost *= 0.6;
    } else if (name === "Protector") {
      cost *= 0.7;
    } else if (name === "TotalDrama") {
      cost *= 0.8;
    } else if (name === "Area") {
      cost *= 0.9;
    }

    totalCost += cost;
  }
  if (budget >= totalCost) {
    console.log(
      `You bought all the series and left with ${(budget - totalCost).toFixed(
        2
      )} lv.`
    );
  } else {
    console.log(
      `You need ${(totalCost - budget).toFixed(2)} lv. more to buy the series!`
    );
  }
}

series([
  "25",
  "6",
  "Teen Wolf",
  "8",
  "Protector",
  "5",
  "TotalDrama",
  "5",
  "Area",
  "4",
  "Thrones",
  "5",
  "Lucifer",
  "9",
]);
