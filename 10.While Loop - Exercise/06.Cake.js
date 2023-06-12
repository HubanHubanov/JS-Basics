function cake(input) {
  let index = 0;
  let cakeWidth = Number(input[index]);
  index++;
  let cakeLength = Number(input[index]);
  index++;
  let cakePieces = cakeWidth * cakeLength;

  let piecesTaken = 0;

  let flag = false;

  while (piecesTaken < cakePieces) {
    let command = input[index];
    index++;

    if (command === "STOP") {
      flag = true;
      console.log(`${cakePieces - piecesTaken} pieces are left.`);
      break;
    }

    let peaces = Number(command);
    piecesTaken += peaces;
  }

  if (!flag) {
    console.log(
      `No more cake left! You need ${piecesTaken - cakePieces} pieces more.`
    );
  }
}

cake(["10", "2", "2", "4", "6", "STOP"]);
