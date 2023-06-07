function footballLeague(input) {
  let stadiumCapacity = Number(input[0]);
  let fansNumber = Number(input[1]);
  let fansInA = 0;
  let fansInB = 0;
  let fansInV = 0;
  let fansInG = 0;

  for (let i = 2; i < input.length; i++) {
    let sector = input[i];

    switch (sector) {
      case "A":
        fansInA++;
        break;
      case "B":
        fansInB++;
        break;
      case "V":
        fansInV++;
        break;
      case "G":
        fansInG++;
        break;
    }
  }
  let fansInAPerc = (fansInA / fansNumber) * 100;
  let fansInBPerc = (fansInB / fansNumber) * 100;
  let fansInVPerc = (fansInV / fansNumber) * 100;
  let fansInGPerc = (fansInG / fansNumber) * 100;
  let percentFansToStadium = (fansNumber / stadiumCapacity) * 100;

  console.log(`${fansInAPerc.toFixed(2)}%`);
  console.log(`${fansInBPerc.toFixed(2)}%`);
  console.log(`${fansInVPerc.toFixed(2)}%`);
  console.log(`${fansInGPerc.toFixed(2)}%`);
  console.log(`${percentFansToStadium.toFixed(2)}%`);
}

footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
