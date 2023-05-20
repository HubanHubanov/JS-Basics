function trainingArea(input) {
  let w = Number(input[0]);
  let h = Number(input[1]);

  let desksPerRow = (h * 100 - 100) / 70;
  let desksPerRowFormat = Math.floor(desksPerRow);

  let rows = (w * 100) / 120;
  let rowsFormat = Math.floor(rows);

  let desks = desksPerRowFormat * rowsFormat - 3;

  console.log(desks);
}

trainingArea(["8.4", "5.2"]);
