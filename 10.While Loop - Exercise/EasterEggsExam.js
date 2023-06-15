function easterEggs(input) {
  let eggsNum = Number(input[0]);
  let redCount = 0;
  let orangeCount = 0;
  let blueCount = 0;
  let greenCount = 0;
  let maxNum = 0;
  let colourMaxEggs = "";

  for (let i = 1; i < input.length; i++) {
    let colour = input[i];

    if (colour === "red") {
      redCount++;
      if (redCount > maxNum) {
        maxNum = redCount
        colourMaxEggs = colour;
      }
    } else if (colour === "orange") {
      orangeCount++;
      if (orangeCount > maxNum) {
        maxNum = orangeCount;
        colourMaxEggs = colour;
      }
    } else if (colour === "blue") {
      blueCount++;
      if (blueCount > maxNum) {
        maxNum = blueCount;
        colourMaxEggs = colour;
      }
    } else if (colour === "green") {
      greenCount++;
      if (greenCount > maxNum) {
        maxNum = greenCount;
        colourMaxEggs = colour;
      }
    }
  }
  console.log(`Red eggs: ${redCount}`);
  console.log(`Orange eggs: ${orangeCount}`);
  console.log(`Blue eggs: ${blueCount}`);
  console.log(`Green eggs: ${greenCount}`);
  console.log(`Max eggs: ${maxNum} -> ${colourMaxEggs}`);
}

easterEggs(["4", "blue", "red", "blue", "orange"]);
