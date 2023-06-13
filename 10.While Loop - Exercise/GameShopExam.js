function gameShop(input) {
  let index = 0;
  let soldGAmes = Number(input[index]);
  let hearthstoneCount = 0;
  let forniteCount = 0;
  let overwatchCoun = 0;
  let otherCount = 0;
  let gamesCount = 0;

  while (gamesCount < soldGAmes) {
    index++;
    let game = input[index];

    if (game === "Hearthstone") {
      hearthstoneCount++;
      gamesCount++;
    } else if (game === "Fornite") {
      forniteCount++;
      gamesCount++;
    } else if (game === "Overwatch") {
      overwatchCoun++;
      gamesCount++;
    } else {
      otherCount++;
      gamesCount++;
    }
  }
  let hearthstonePerc = (hearthstoneCount / soldGAmes) * 100;
  let fornitePerc = (forniteCount / soldGAmes) * 100;
  let overwatchPerc = (overwatchCoun / soldGAmes) * 100;
  let otherPerc = (otherCount / soldGAmes) * 100;

  console.log(`Hearthstone - ${hearthstonePerc.toFixed(2)}%`);
  console.log(`Fornite - ${fornitePerc.toFixed(2)}%`);
  console.log(`Overwatch - ${overwatchPerc.toFixed(2)}%`);
  console.log(`Others - ${otherPerc.toFixed(2)}%`);
}

gameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
