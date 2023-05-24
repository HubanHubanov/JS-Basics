function movieDay(input) {
  let timeNeeded = Number(input[0]);
  let numberScenes = Number(input[1]);
  let timeScene = Number(input[2]);

  let preparationTime = 0.15 * timeNeeded;
  let totalTime = numberScenes * timeScene + preparationTime;

  if (timeNeeded >= totalTime) {
    console.log(
      `You managed to finish the movie on time! You have ${Math.round(
        timeNeeded - totalTime
      )} minutes left!`
    );
  } else {
    console.log(
      `Time is up! To complete the movie you need ${Math.round(
        totalTime - timeNeeded
      )} minutes.`
    );
  }
}

movieDay(["120", "10", "11"]);
