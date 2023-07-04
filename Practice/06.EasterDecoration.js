function easterDecoration(input) {
  let index = 0;
  let customersNumber = Number(input[index]);
  let totalPrice = 0;

  for (i = 1; i <= customersNumber; i++) {
    let pricePerClient = 0;
    let purchasedItems = 0;

    index++;
    let currentInput = input[index];

    while (currentInput !== "Finish") {
      let item = currentInput;

      if (item === "basket") {
        purchasedItems++;
        pricePerClient += 1.5;
      } else if (item === "wreath") {
        purchasedItems++;
        pricePerClient += 3.8;
      } else if (item === "chocolate bunny") {
        purchasedItems++;
        pricePerClient += 7;
      }

      index++;
      currentInput = input[index];
    }

    if (purchasedItems % 2 === 0) {
      pricePerClient *= 0.8;
    }

    totalPrice += pricePerClient;

    console.log(
      `You purchased ${purchasedItems} items for ${pricePerClient.toFixed(
        2
      )} leva.`
    );
  }

  console.log(
    `Average bill per client is: ${(totalPrice / customersNumber).toFixed(
      2
    )} leva.`
  );
}
easterDecoration([
  "1",
  "basket",
  "wreath",
  "chocolate bunny",
  "wreath",
  "basket",
  "chocolate bunny",
  "Finish",
]);
