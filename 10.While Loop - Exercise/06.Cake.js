function cake(input) {
  let index = 0;
  let cakeWidth = Number(input[index]);
  index++;
  let cakeLength = Number(input[index]);
  index++;
  let cakePeaces = cakeWidth * cakeLength;

  let peacesTaken = 0;

  let flag = false;

  while (peacesTaken < cakePeaces) {
    let command = input[index];
    index++;

    if (command === "STOP") {
      flag = true;
      console.log(`${cakePeaces - peacesTaken} pieces are left.`);
      break;
    }

    let peaces = Number(command);
    peacesTaken += peaces;
  }

  if (!flag) {
    console.log(
      `No more cake left! You need ${peacesTaken - cakePeaces} pieces more.`
    );
  }
}

cake(["10", "2", "2", "4", "6", "STOP"]);
