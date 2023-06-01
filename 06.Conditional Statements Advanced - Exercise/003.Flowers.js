function flowers(input) {
  let chrysNum = Number(input[0]);
  let rosesNum = Number(input[1]);
  let tulipsNum = Number(input[2]);
  let season = input[3];
  let holiday = input[4];

  let chrysPrice = 0;
  let rosesPrice = 0;
  let tulipsPrice = 0;

  switch (season) {
    case "Spring":
    case "Summer":
      chrysPrice = 2.0;
      rosesPrice = 4.1;
      tulipsPrice = 2.5;
      break;
    case "Autumn":
    case "Winter":
      chrysPrice = 3.75;
      rosesPrice = 4.5;
      tulipsPrice = 4.15;
      break;
  }
  if (holiday === "Y") {
    chrysPrice *= 1.15;
    rosesPrice *= 1.15;
    tulipsPrice *= 1.15;
  }
  let bouquet =
    chrysPrice * chrysNum + rosesPrice * rosesNum + tulipsPrice * tulipsNum;

  if (tulipsNum > 7 && season === "Spring") {
    bouquet *= 0.95;
  }
  if (rosesNum >= 10 && season === "Winter") {
    bouquet *= 0.9;
  }
  if (chrysNum + rosesNum + tulipsNum > 20) {
    bouquet *= 0.8;
  }

  let total = bouquet + 2;

  console.log(total.toFixed(2));
}
flowers(["2", "4", "8", "Spring", "Y"]);
