function coins(input) {
  let sum = Number(input[0]);

  let sumSt = Math.floor(sum * 100);
  let coinsCounter = 0;

  while (sumSt > 0) {
    if (sumSt >= 200) {
      sumSt -= 200;
      coinsCounter++;
    } else if (sumSt >= 100) {
      sumSt -= 100;
      coinsCounter++;
    } else if (sumSt >= 50) {
      sumSt -= 50;
      coinsCounter++;
    } else if (sumSt >= 20) {
      sumSt -= 20;
      coinsCounter++;
    } else if (sumSt >= 10) {
      sumSt -= 10;
      coinsCounter++;
    } else if (sumSt >= 5) {
      sumSt -= 5;
      coinsCounter++;
    } else if (sumSt >= 2) {
      sumSt -= 2;
      coinsCounter++;
    } else if (sumSt >= 1) {
      sumSt -= 1;
      coinsCounter++;
    }
  }

  console.log(coinsCounter);
}

coins(["1.23"]);
