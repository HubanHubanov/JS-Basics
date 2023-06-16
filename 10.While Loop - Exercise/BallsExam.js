function balls(input) {
  let index = 0;
  let ballsNum = Number(input[index]);
  index++;
  let cases = 0;
  let points = 0;
  let redBallsCount = 0;
  let orangeBallsCount = 0;
  let yellowBallsCount = 0;
  let whiteBallsCount = 0;
  let blackBallsCount = 0;
  let otherBallsCount = 0;

  while (cases < ballsNum) {
    let colour = input[index];
    index++;
    cases++;

    if (colour === "red") {
      points += 5;
      redBallsCount++;
    } else if (colour === "orange") {
      points += 10;
      orangeBallsCount++;
    } else if (colour === "yellow") {
      points += 15;
      yellowBallsCount++;
    } else if (colour === "white") {
      points += 20;
      whiteBallsCount++;
    } else if (colour === "black") {
      points = Math.floor(points / 2);
      blackBallsCount++;
    } else {
      otherBallsCount++;
    }
  }

  console.log(`Total points: ${points}`);
  console.log(`Red balls: ${redBallsCount}`);
  console.log(`Orange balls: ${orangeBallsCount}`);
  console.log(`Yellow balls: ${yellowBallsCount}`);
  console.log(`White balls: ${whiteBallsCount}`);
  console.log(`Other colors picked: ${otherBallsCount}`);
  console.log(`Divides from black balls: ${blackBallsCount}`);
}
balls(["5", "red", "red", "ddd", "ddd", "ddd"]);
