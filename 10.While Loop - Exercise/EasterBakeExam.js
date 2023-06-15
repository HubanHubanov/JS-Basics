function easterBake(input) {
  let index = 0;
  let cakesNum = Number(input[index]);
  index++;

  let sugar = 0;
  let flour = 0;
  let sugarTotal = 0;
  let flourTotal = 0;
  let maxUsedSugar = 0;
  let maxUsedFlour = 0;
  let casesChecked = 0;

  while (casesChecked < cakesNum) {
    sugar = Number(input[index]);
    index++;
    sugarTotal += sugar;
    if (sugar > maxUsedSugar) {
      maxUsedSugar = sugar;
    }

    flour = Number(input[index]);
    index++;
    flourTotal += flour;
    if (flour > maxUsedFlour) {
      maxUsedFlour = flour;
    }
    casesChecked++;
  }

  let sugarPacskNeeded = Math.ceil(sugarTotal / 950);
  let flourPacksNeede = Math.ceil(flourTotal / 750);

  console.log(`Sugar: ${sugarPacskNeeded}`);
  console.log(`Flour: ${flourPacksNeede}`);
  console.log(
    `Max used flour is ${maxUsedFlour} grams, max used sugar is ${maxUsedSugar} grams.`
  );
}

easterBake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);
