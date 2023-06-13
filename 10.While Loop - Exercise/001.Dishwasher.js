function dishwasher(input) {
  let index = 0;
  let detergentBottles = Number(input[index]);
  index++;
  let detergetnAvailable = detergentBottles * 750;
  let command = input[index];
  let itemsCount = 0;
  let detergentNeeded = 0;
  let detergentTotal = 0;
  let dishesCount = 0;
  let potsCount = 0;

  let flag = false;

  while (command !== "End") {
    itemsCount = Number(command);

    if (index % 3 === 0) {
      detergentNeeded = itemsCount * 15;
      detergentTotal += detergentNeeded;
      potsCount += itemsCount;
    } else {
      detergentNeeded = itemsCount * 5;
      detergentTotal += detergentNeeded;
      dishesCount += itemsCount;
    }

    if (detergentTotal > detergetnAvailable) {
      flag = true;
      console.log(
        `Not enough detergent, ${
          detergentTotal - detergetnAvailable
        } ml. more necessary!`
      );
      break;
    }
    index++;
    command = input[index];
  }
  if (!flag) {
    console.log("Detergent was enough!");
    console.log(`${dishesCount} dishes and ${potsCount} pots were washed.`);
    console.log(`Leftover detergent ${detergetnAvailable - detergentTotal} ml.`);
  }
}
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);
