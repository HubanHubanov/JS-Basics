function movieDestination(input) {
  let budget = Number(input[0]);
  let destination = input[1];
  let season = input[2];
  let daysNum = Number(input[3]);
  let pricePerDay = 0;

  switch (destination) {
    case "Dubai":
      switch (season) {
        case "Winter":
          pricePerDay = 45000;
          break;
 case "Summer":
          pricePerDay = 40000;
          break;
      }
break;

    case "Sofia":
      switch (season) {
        case "Winter":
          pricePerDay = 17000;
          break;
 case "Summer":
          pricePerDay = 12500;
          break;
      }
break;

    case "London":
      switch (season) {
        case "Winter":
          pricePerDay = 24000;
          break;
 case "Summer":
          pricePerDay = 20250;
          break;
      }
 break;
  }

  let cost = pricePerDay * daysNum;

  if (destination === "Dubai") {
    cost *= 0.7;
  } else if (destination === "Sofia") {
    cost *= 1.25;
  }

  if (budget >= cost) {
    console.log(
      `The budget for the movie is enough! We have ${(budget - cost).toFixed(
        2
      )} leva left!`
    );
  } else {
    console.log(`The director needs ${(cost - budget).toFixed(2)} leva more!`);
  }
}

movieDestination(["1000000", "Dubai", "Summer", "5"]);
