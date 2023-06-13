function gameShop(input) {
  let soldGAmes = Number(input[0]);
  let hearthstoneCount = 0;
  let forniteCount = 0;
  let overwatchCoun = 0;
  let otherCount = 0;

  for (let i = 1; i <= soldGAmes; i++) {
    let game = input[i];

    if (game === "Hearthstone") {
      hearthstoneCount++;
    } else if (game === "Fornite") {
      forniteCount++;
    } else if (game === "Overwatch") {
      overwatchCoun++;
    } else {
      otherCount++;
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

gameShop(["3", "Hearthstone", "Diablo", "Star Craft"]);
