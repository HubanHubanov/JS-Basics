function birthdayParty(input) {
  let rent = Number(input[0]);

  let cake = 0.2 * rent;
  let drinks = 0.55 * cake;
  let dj = (1 / 3) * rent;

  let totalCost = rent + cake + drinks + dj;

  console.log(totalCost);
}

birthdayParty(["2250"]);
    