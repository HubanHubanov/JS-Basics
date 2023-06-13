function reportSystem(input) {
  let index = 0;
  let targetMoney = input[index];
  index++;
  let command = input[index];

  let cashMoney = 0;
  let cashCounter = 0;
  let cardMoney = 0;
  let cardCounter = 0;
  let totalMoney = 0;

  let flag = false;

  while (command !== "End") {
    let money = Number(command);

    if (index % 2 !== 0) {
      if (money > 100) {
        console.log("Error in transaction!");
      } else {
        console.log("Product sold!");
        cashMoney += money;
        cashCounter++;
        totalMoney += money;
      }
    } else {
      if (money < 10) {
        console.log("Error in transaction!");
      } else {
        console.log("Product sold!");
        cardMoney += money;
        cardCounter++;
        totalMoney += money;
      }
    }
    if (totalMoney >= targetMoney) {
      flag = true;
      console.log(`Average CS: ${(cashMoney / cashCounter).toFixed(2)}`);
      console.log(`Average CC: ${(cardMoney / cardCounter).toFixed(2)}`);
      break;
    }

    index++;
    command = input[index];
  }

  if (!flag) {
    console.log("Failed to collect required money for charity.");
  }
}

reportSystem(["600", "86", "150", "98", "227", "End"]);
