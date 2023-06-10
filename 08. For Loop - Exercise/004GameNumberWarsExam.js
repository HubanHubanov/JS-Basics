function test(input) {
  let firstName = input[0];
  let secondName = input[1];
  let firstNamePoints = 0;
  let secondNamePoints = 0;
  let points = 0;

  for (let i = 2; i < input.length; i += 2) {
    
    if (input[i] === "End of game") {
      console.log(`${firstName} has ${firstNamePoints} points`);
      console.log(`${secondName} has ${secondNamePoints} points`);
      break;
    }

    if (Number(input[i]) > Number(input[i + 1])) {
      points = Number(input[i]) - Number(input[i + 1]);
      firstNamePoints += points;
   
    } else if (Number(input[i]) < Number(input[i + 1])) {
      points = Number(input[i + 1]) - Number(input[i]);
      secondNamePoints += points;
    
    } else if (Number(input[i]) === Number(input[i + 1])) {
      console.log("Number wars!");

      if (Number(input[i + 2]) > Number(input[i + 3])) {
        console.log(`${firstName} is winner with ${firstNamePoints} points`);
      
    } else if (Number(input[i + 2]) < Number(input[i + 3])) {
        console.log(`${secondName} is winner with ${secondNamePoints} points`);
      }
      
      break;
    }
  }
}

test(["Aleks", "Georgi", "4", "5", "3", "2", "4", "3", "4", "4", "5", "2"]);
