function pCgameShop(input) {
  let gamesSold = Number(input[0]);

  let hearthstoneCounter = 0;
  let forniteCounter = 0;
  let overwatchCounter = 0;
  let othersCounter = 0;

  for (let i = 1; i < input.length; i++) {
    let name = input[i];
    switch (name) {
      case "Hearthstone":
        hearthstoneCounter++;
        break;
      case "Fornite":
        forniteCounter++;
        break;
      case "Overwatch":
        overwatchCounter++;
        break;
      default:
        othersCounter++;
        break;
    }
  }

  console.log(
    `Hearthstone - ${((hearthstoneCounter / gamesSold) * 100).toFixed(2)}%`
  );
  console.log(`Fornite - ${((forniteCounter / gamesSold) * 100).toFixed(2)}%`);
  console.log(
    `Overwatch - ${((overwatchCounter / gamesSold) * 100).toFixed(2)}%`
  );
  console.log(`Others - ${((othersCounter / gamesSold) * 100).toFixed(2)}%`);
}

pCgameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
