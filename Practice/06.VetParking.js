function vetParking(input) {
  let daysNumber = Number(input[0]);
  let hoursNumber = Number(input[1]);
  let totalPrice = 0;
  let dayCounter = 0;

  for (let days = 1; days <= daysNumber; days++) {
    let price = 0;
    dayCounter++;
    for (let hours = 1; hours <= hoursNumber; hours++) {
      if (days % 2 === 0 && hours % 2 !== 0) {
        price += 2.5;
      } else if (days % 2 !== 0 && hours % 2 === 0) {
        price += 1.25;
      } else {
        price += 1;
      }
    }
    totalPrice += price;

    console.log(`Day: ${dayCounter} - ${price.toFixed(2)} leva`);
  }

  console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}

vetParking(["5", "2"]);
