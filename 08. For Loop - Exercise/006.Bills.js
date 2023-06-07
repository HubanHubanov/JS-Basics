function bills(input) {
  let monthsNumber = Number(input[0]);
  let electricity = 0;

  for (let i = 1; i < input.length; i++) {
    electricity += Number(input[i]);
  }
  let water = 20 * monthsNumber;
  let internet = 15 * monthsNumber;
  let other = (electricity + water + internet) * 1.2;
  let average = (electricity + water + internet + other) / monthsNumber;

  console.log(`Electricity: ${electricity.toFixed(2)} lv`);
  console.log(`Water: ${water.toFixed(2)} lv`);
  console.log(`Internet: ${internet.toFixed(2)} lv`);
  console.log(`Other: ${other.toFixed(2)} lv`);
  console.log(`Average: ${average.toFixed(2)} lv`);
}

bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
