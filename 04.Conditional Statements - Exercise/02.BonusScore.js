function bonusScore(input) {
  let num = Number(input[0]);

  let bonus = 0;
  let extraBonus = 0;

  if (num <= 100) {
    bonus = 5;
  } else if (num <= 1000) {
    bonus = 0.2 * num;
  } else {
    bonus = 0.1 * num;
  }

  if (num % 2 === 0) {
    extraBonus = 1;
  } else if (num % 10 === 5) {
    extraBonus = 2;
  }

  let totalBonus = bonus + extraBonus;
  console.log(totalBonus);
  console.log(num + totalBonus);
}

bonusScore(["20"]);
