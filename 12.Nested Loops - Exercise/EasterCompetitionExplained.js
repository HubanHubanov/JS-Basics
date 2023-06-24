function solve(input) {
 
  let players = input[0]; // not needed
  let currentBaker = "";
  let currentAccruedPoints = 0; // will be accrued until we get a new name, then we drop them to 0 again
  let topBakerName = ""; // will be updated on maxValue
  let topBakerPoints = 0; // will be updated on maxValue

  for (let i = 1; i < input.length; i++) {

      let command = input[i];

      if (command === "Stop") {
          console.log(`${currentBaker} has ${currentAccruedPoints} points.`);
          if (currentBaker === topBakerName) { // check if current baker matches the top baker and if so return the following log
              console.log(`${currentBaker} is the new number 1!`);
          }
          continue; // proceed to the next iteration of the loop, if you want to do it without continue you need to add an additional condition on the string check that should look lile if (isNaN(Number(command)) && command !== "Stop")
      }

      if (isNaN(Number(command))) { // if Number(command) returns NaN it means the input is 'string'
          currentBaker = command;
          currentAccruedPoints = 0; // we have a new name so we have to reset current points
      }

      if (!isNaN(Number(command))) { // if Number(command) does not return NaN it means the input is 'number'
          currentAccruedPoints += Number(command); // increment current points
          if (currentAccruedPoints > topBakerPoints) { // normal maxValue approach
              topBakerPoints = currentAccruedPoints; // normal maxValue approach
              topBakerName = currentBaker; // if current points are maxed, current baker will be top baker
          }
      }
  }

  console.log(`${topBakerName} won competition with ${topBakerPoints} points!`);

}
solve(["3",
"Chef Manchev", "10",
"10",
"10",
"10",
"Stop",
"Natalie",
"8",
"2",
"9",
"Stop",
"George",
"9",
"2",
"4",
"2",
"Stop"]);