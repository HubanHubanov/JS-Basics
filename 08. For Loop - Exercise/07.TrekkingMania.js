function trekkingMania(input) {
  let groupsNumber = Number(input[0]);
  let musala = 0;
  let monblan = 0;
  let kilim = 0;
  let k2 = 0;
  let everest = 0;
  let group = 0;

  for (let index = 1; index < input.length; index++) {
    group = Number(input[index]);

    if (group <= 5) {
      musala += group;
    } else if (group <= 12) {
      monblan += group;
    } else if (group <= 25) {
      kilim += group;
    } else if (group <= 40) {
      k2 += group;
    } else {
      everest += group;
    }
  }
  let totalPeople = musala + monblan + kilim + k2 + everest;

  console.log(`${((musala / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((monblan / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((kilim / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((k2 / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((everest / totalPeople) * 100).toFixed(2)}%`);
}

trekkingMania([ "10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
