function easterDecoration(input) {
  let index = 0;
  let customersNumber = Number(input[index]);
  let customersChecked = 0;

  let basketPrice = 1.5;
  let wreathPrice = 3.8;
  let bunnyPrice = 7;

  let totalPrice = 0;

  while (customersChecked < customersNumber) {
    customersChecked++;
    let counter = 0;
    let totalPrice1Client = 0;

    index++;
    let currentInput = input[index];

    while (currentInput !== "Finish") {
      counter++;

      if (currentInput === "basket") {
        totalPrice1Client += basketPrice;
      } else if (currentInput === "wreath") {
        totalPrice1Client += wreathPrice;
      } else if (currentInput === "chocolate bunny") {
        totalPrice1Client += bunnyPrice;
      }

      index++;
      currentInput = input[index];

      if (currentInput === "Finish") {
        if (counter % 2 === 0) {
          totalPrice1Client *= 0.8;
        }
      }
    }
    totalPrice += totalPrice1Client;
    console.log(
      `You purchased ${counter} items for ${totalPrice1Client.toFixed(2)} leva.`
    );
  }

  console.log(
    `Average bill per client is: ${(totalPrice / customersNumber).toFixed(
      2
    )} leva.`
  );
}

easterDecoration(["1",
"basket",
"wreath",
"chocolate bunny",
"wreath",
"basket",
"chocolate bunny",
"Finish"])	