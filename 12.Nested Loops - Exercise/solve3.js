function solve(input) {
  let index = 0;
  let chefsNumber = Number(input[index]);

  let casesChecked = 0;

  while (casesChecked <= chefsNumber) {
    casesChecked++;
    let chefsScore = 0;

  
    index++;
    let name = input[index]
    index++
    let currentInput = input[index];
    while (currentInput !== "Stop") {
        let score = Number(currentInput)
        chefsScore += score;

        index++;
        currentInput = input[index];
    
      
        console.log(currentInput);
      
    }
  }
}

solve([
  "3",
  "Chef Manchev",
  "10",
  "9",
  "8",
  "7",
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
  "Stop",
]);
