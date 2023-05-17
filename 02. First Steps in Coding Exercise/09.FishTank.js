function fishTank(input) {
  let lenght = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let sandPercentage = Number(input[3]);

  let volume = lenght * width * height;
  let volumeLiters = volume / 1000;
  let waterVolume = volumeLiters - (sandPercentage * volumeLiters * 0.01);

  console.log(waterVolume);
}

fishTank(["85", "75", "47", "17"]);
