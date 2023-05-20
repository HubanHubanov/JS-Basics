function fishland(input) {
  let mackerelPrice = Number(input[0]);
  let spratPrice = Number(input[1]);
  let bonitoKg = Number(input[2]);
  let scadKg = Number(input[3]);
  let musselsKg = Number(input[4]);

  let bonitoPrice = 1.6 * mackerelPrice;
  let scadPrice = 1.8 * spratPrice;
  let musselsPrice = 7.5;

  let cost =
    bonitoKg * bonitoPrice + scadKg * scadPrice + musselsPrice * musselsKg;

  console.log(cost.toFixed(2));
}

fishland(["6.90", "4.20", "1.50", "2.50", "1"]);
