function multiplyTable(input) {
  let numberToString = "" + input[0];

  for (let i = 0; i < numberToString.length; i++) {
    let ch = Number(numberToString[i]);

    for (let a = 1; a <= ch; a++) {
      for (let b = 1; b <= Number(numberToString[i + 1]); b++) {
        for (let c = 1; c <= Number(numberToString[i + 2]); c++) {
          console.log(`${a} * ${b} * ${c} = ${a * b * c};`);
        }
      }
    }
  }
}

multiplyTable(["324"]);
