function vetParking(input) {
  let daysNumber = Number(input[0]);
  let hoursNumber = Number(input[1]);
  let tax = 0;
  let totalTax = 0;
  let dayCounter = 0;

  for (let days = 1; days <= daysNumber; days++) {
    let dayTax = 0;
    dayCounter++;
    for (let hours = 1; hours <= hoursNumber; hours++) {
      if (days % 2 === 0 && hours % 2 !== 0) {
        tax = 2.5;
      } else if (days % 2 !== 0 && hours % 2 === 0) {
        tax = 1.25;
      } else {  
        tax = 1;
      }
      dayTax += tax;
      totalTax += tax;
    }
    console.log(`Day: ${dayCounter} - ${dayTax.toFixed(2)} leva`);
  }
  console.log(`Total: ${totalTax.toFixed(2)} leva`);
}
vetParking(["5", "2"]);
