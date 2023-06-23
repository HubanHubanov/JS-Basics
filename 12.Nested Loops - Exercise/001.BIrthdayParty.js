function birthdayParty(a) {
  let rent = Number(a);
  let cake = 0.2 * rent;
  let drinks = 0.55 * cake;
  let DJ = (1 / 3) * rent;

  let budget = rent + cake + drinks + DJ;

  console.log(budget);
}
birthdayParty(2250);
