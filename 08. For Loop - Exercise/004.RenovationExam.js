function renovation(input) {
  let wallHight = Number(input[0]);
  let wallWidth = Number(input[1]);
  let percentNotToPaint = Number(input[2]);
  let totalPaint = 0;

  let wallsTotal = wallHight * wallWidth * 4;
  let WallsToPaint = wallsTotal - (wallsTotal * percentNotToPaint) / 100;

  for (let i = 3; i < input.length; i++) {
    if (input[i] === "Tired!") {
      console.log(`${Math.ceil(WallsToPaint - totalPaint)} quadratic m left. `);
      break;
    }

    let paintLiters = Number(input[i]);
    totalPaint += paintLiters;

    if (totalPaint > WallsToPaint) {
      console.log(
        `All walls are painted and you have ${
          totalPaint - WallsToPaint
        } l paint left!`
      );
    }

    if (totalPaint === WallsToPaint) {
      console.log(`All walls are painted! Great job, Pesho!`);
    }
  }
}

renovation(["2", "3", "25", "6", "7", "8"]);
