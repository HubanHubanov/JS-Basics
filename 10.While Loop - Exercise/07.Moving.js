function moving(input) {
  let index = 0;
  let spaceWidth = Number(input[index]);
  index++;
  let spaceLength = Number(input[index]);
  index++;
  let spaceHight = Number(input[index]);
  index++;

  let spaceVolume = spaceWidth * spaceLength * spaceHight;

  let command = input[index];
  index++;

  let totalSpace = 0;

  while (command !== "Done") {
    let space = Number(command);
    totalSpace += space;

    if (spaceVolume < totalSpace) {
      console.log(
        `No more free space! You need ${
          totalSpace - spaceVolume
        } Cubic meters more.`
      );
    }

    command = input[index];
    index++;
  }

  console.log(`${spaceVolume - totalSpace} Cubic meters left.`);
}

moving(["10", "1", "2", "4", "6", "Done"]);
