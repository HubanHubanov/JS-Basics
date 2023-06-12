function moving(input) {
  let w = Number(input[0]);
  let l = Number(input[1]);
  let h = Number(input[2]);
  let freeSpace = w * l * h;

  let boxesSpace = 0;
  let index = 3;

  let condition = false;

  while (freeSpace > boxesSpace) {
    let command = input[index];
    index++;

    if (command === "Done") {
      condition = true;
      console.log(`${freeSpace - boxesSpace} Cubic meters left.`);
      break;
    }

    let space = Number(command);
    boxesSpace += space;
  }
  if (!condition) {
    console.log(
      `No more free space! You need ${
        boxesSpace - freeSpace
      } Cubic meters more.`
    );
  }
}

moving(["10", "1", "2", "4", "6", "Done"]);
