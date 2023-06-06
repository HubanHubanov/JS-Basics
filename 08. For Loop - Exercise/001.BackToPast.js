function backToPast(input) {
  let money = Number(input[0]);
  let expenses = 0;
  let age = 18;

  for (let i = 1800; i <= input[1]; i++) {
    if (i % 2 === 0) {
      age += 1;
      expenses += 12000;
    } else {
      expenses += 12000 + 50 * age;
      age += 1;
    }
  }
  if (money >= expenses) {
    console.log(
      `Yes! He will live a carefree life and will have ${(
        money - expenses
      ).toFixed(2)} dollars left.`
    );
  } else {
    console.log(
      `He will need ${(expenses - money).toFixed(2)} dollars to survive.`
    );
  }
}

backToPast(["100000.15", "1808"]);
