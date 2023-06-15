function easterShop(input) {
  let index = 0;
  let eggsAvailable = Number(input[index]);
  index++;
  let command = input[index];
  
  
  let eggsSold = 0;
  let eggsNum = 0;

  while (command !== "Close") {

  index++;
 eggsNum = Number(input[index]);
   
    if (command === "Buy") {
      eggsAvailable -= eggsNum;
      eggsSold += eggsNum;
    } else if (command === "Fill") {
      eggsAvailable += eggsNum;
    }

    if (eggsAvailable < 0) {
      break;
    }

    index++;
    command = input[index];
    
    
    
  }

  if (eggsAvailable < 0) {
    console.log("Not enough eggs in store!");
    console.log(`You can buy only ${eggsAvailable + eggsNum}.`);
  } else {
    console.log(`Store is closed!`);
    console.log(`${eggsSold} eggs sold.`);
  }
}

easterShop(["13",
"Buy",
"8",
"Fill",
"3",
"Buy",
"10"])