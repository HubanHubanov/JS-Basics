function careOfPuppy(input) {
  let index = 0;
  let food = Number(input[index]);
  index++;
  let currentInput = input[index];
  let totalFood = 0;

  while (currentInput !== "Adopted") {
    let foodEaten = Number(currentInput);
    totalFood += foodEaten;

    index++;
    currentInput = input[index];
  }
  let foodInGr = 1000 * food;

  if (foodInGr >= totalFood) {
    console.log(`Food is enough! Leftovers: ${foodInGr - totalFood} grams. `);
  } else {
    console.log(
      `Food is not enough. You need ${totalFood - foodInGr} grams more. `
    );
  }
}

careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
