function housePainting(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);
  let h = Number(input[2]);

  let greenpaintLitre = 3.4;
  let redPaintLitre = 4.3;

  let squareWall = x * x;
  let rectangularWall = x * y;
  let wallsArea = 2 * (squareWall + rectangularWall);
  let wallsAreaToPaint = wallsArea - 1.2 * 2 - 2 * (1.5 * 1.5);
  let greenPaintNeeded = wallsAreaToPaint / 3.4;

  let rectanuglarRoof = x * y;
  let triangleRoof = (x * h) / 2;
  let roofArea = 2 * rectanuglarRoof + 2 * triangleRoof;
  let redPaintNeeded = roofArea / 4.3;

  console.log(greenPaintNeeded.toFixed(2));
  console.log(redPaintNeeded.toFixed(2));
}

housePainting(["10.25", "15.45", "8.88"]);
