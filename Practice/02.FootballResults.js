function footbalResults(input) {
  let result1 = "" + input[0];
  let result2 = "" + input[1];
  let result3 = input[2].toString();

  let wins = 0;
  let loses = 0;
  let draws = 0;

  if (Number(result1[0]) > Number(result1[2])) {
    wins++;
  } else if (Number(result1[0]) < Number(result1[2])) {
    loses++;
  } else {
    draws++;
  }

  if (Number(result2[0]) > Number(result2[2])) {
    wins++;
  } else if (Number(result2[0]) < Number(result2[2])) {
    loses++;
  } else {
    draws++;
  }

  if (Number(result3[0]) > Number(result3[2])) {
    wins++;
  } else if (Number(result3[0]) < Number(result3[2])) {
    loses++;
  } else {
    draws++;
  }

  console.log(`Team won ${wins} games.`);
  console.log(`Team lost ${loses} games.`);
  console.log(`Drawn games: ${draws}`);
}

footbalResults(["0:2", "0:1", "3:3"]);
