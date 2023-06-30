function trekkingMania(input) {
  let groupsNumber = Number(input[0]);

  let musalaNumber = 0;
  let monblancNumber = 0;
  let kilimanjaroNumber = 0;
  let k2Number = 0;
  let everestNumber = 0;

  let totalPeople = 0;

  for (let i = 1; i < input.length; i++) {
    let group = Number(input[i]);

    if (group <= 5) {
      musalaNumber += group;
    } else if (group <= 12) {
      monblancNumber += group;
    } else if (group <= 25) {
      kilimanjaroNumber += group;
    } else if (group <= 40) {
      k2Number += group;
    } else {
      everestNumber += group;
    }
    totalPeople += group;
  }

  console.log(`${((musalaNumber / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((monblancNumber / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((kilimanjaroNumber / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((k2Number / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((everestNumber / totalPeople) * 100).toFixed(2)}%`);
}

trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
