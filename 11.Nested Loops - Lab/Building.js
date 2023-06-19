function building(input) {
  let floorsNum = Number(input[0]);
  let roomsNum = Number(input[1]);

  for (let floors = floorsNum; floors >= 1; floors--) {
    let buff = "";
    for (let rooms = 0; rooms < roomsNum; rooms++) {
      if (floors === floorsNum) {
        buff += "L" + floors + rooms + " ";
      } else if (floors % 2 === 0) {
        buff += "O" + floors + rooms + " ";
      } else if (floors % 2 !== 0) {
        buff += "A" + floors + rooms + " ";
      }
    }
    console.log(buff);
  }
}

building(["6", "4"]);
