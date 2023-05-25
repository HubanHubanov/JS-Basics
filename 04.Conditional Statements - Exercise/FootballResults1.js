function football(input) {
  let firstResult = input[0];
  let secondResut = input[1];
  let thirdResult = input[2];

  let wonMatchesCount = 0;
  let lostMatchesCount = 0;
  let drawMatchesCount = 0;

  let homeTeamResultFromMatchOne = Number(firstResult[0]);
  let guestTeamResultFromMatchOne = Number(firstResult[2]);

  if (homeTeamResultFromMatchOne > guestTeamResultFromMatchOne) {
    wonMatchesCount = wonMatchesCount + 1;
  } else if (homeTeamResultFromMatchOne === guestTeamResultFromMatchOne) {
    drawMatchesCount = drawMatchesCount + 1;
  } else if (homeTeamResultFromMatchOne < guestTeamResultFromMatchOne) {
    lostMatchesCount = lostMatchesCount + 1;
  }

  let homeTeamResultFromMatchTwo = Number(secondResut[0]);
  let guestTeamResultFromMatchTwo = Number(secondResut[2]);

  if (homeTeamResultFromMatchTwo > guestTeamResultFromMatchTwo) {
    wonMatchesCount += 1;
  } else if (homeTeamResultFromMatchTwo === guestTeamResultFromMatchTwo) {
    drawMatchesCount += 1;
  } else if (homeTeamResultFromMatchTwo < guestTeamResultFromMatchTwo) {
    lostMatchesCount += 1;
  }

  let homeTeamResultFromMatchThree = Number(thirdResult[0]);
  let guestTeamResultFromMatchThree = Number(thirdResult[2]);

  if (homeTeamResultFromMatchThree > guestTeamResultFromMatchThree) {
    wonMatchesCount += 1;
  } else if (homeTeamResultFromMatchThree === guestTeamResultFromMatchThree) {
    drawMatchesCount += 1;
  } else if (homeTeamResultFromMatchThree < guestTeamResultFromMatchThree) {
    lostMatchesCount += 1;
  }

  console.log(`Team won ${wonMatchesCount} games.`);
  console.log(`Team lost ${lostMatchesCount} games.`);
  console.log(`Drawn games: ${drawMatchesCount}`);
}

football(["0:2", "0:1", "3:3"]);
