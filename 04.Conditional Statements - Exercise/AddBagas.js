function addBags(input) {
  tax = Number(input[0]);
  luggageWeight = Number(input[1]);
  days = Number(input[2]);
  luggageNumber = Number(input[3]);

  if (luggageWeight < 10) {
    tax *= 0.2;
  } else if (luggageWeight > 20) {
    tax;
  } else {
    tax *= 0.5;
  }

  if (days > 30) {
    tax *= 1.1;
  } else if (days < 7) {
    tax *= 1.4;
  } else {
    tax *= 1.15;
  }

  let totalTax = tax * luggageNumber;
  console.log(`The total price of bags is: ${totalTax.toFixed(2)} lv.`);
}

addBags(["63.80", "23", "3", "1"]);
