function cinema(input) {
  let screenCapacity = Number(input[0]);
  let peopleTotal = 0;
  let incomeTotal = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[i] === "Movie time!") {
      console.log(
        `There are ${screenCapacity - peopleTotal} seats left in the cinema.`
      );
      break;
    }

    let peopleNumber = Number(input[i]);
    let peopleIncome = peopleNumber * 5;
    if (peopleNumber % 3 === 0) {
      peopleIncome -= 5;
    }
    peopleTotal += peopleNumber;
    
    
    if (peopleTotal > screenCapacity) {
        console.log("The cinema is full.");
        break;
    }
    incomeTotal += peopleIncome;
  }
  console.log(`Cinema income - ${incomeTotal} lv.`);
}

cinema(["100",
"15",
"15",
"15",
"15",
"15",
"15",
"15"
])	


