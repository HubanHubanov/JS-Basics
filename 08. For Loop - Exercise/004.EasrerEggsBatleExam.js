function easterEggBattle(input) {
  let eggsNumFirstPlayer = Number(input[0]);
  let eggsNumSecondPlayer = Number(input[1]);

  for (let i = 2; i < input.length; i++) {
    if (input[i] === "End") {
      console.log(`Player one has ${eggsNumFirstPlayer} eggs left.`);
      console.log(`Player two has ${eggsNumSecondPlayer} eggs left.`);
      break;
    }

    if (input[i] === "one") {
      eggsNumSecondPlayer -= 1;
    } else if (input[i] === "two") {
      eggsNumFirstPlayer -= 1;
    }

    if (eggsNumFirstPlayer === 0) {
      console.log(
        `Player one is out of eggs. Player two has ${eggsNumSecondPlayer} eggs left.`
      );
      break;
    }

    if (eggsNumSecondPlayer === 0) {
      console.log(
        `Player two is out of eggs. Player one has ${eggsNumFirstPlayer} eggs left.`
      );
      break;
    }
  }
}

easterEggBattle(["6", "3", "one", "two", "two", "one", "one"]);
