function triangleArea(input) {
  let a = Number(input[0]);
  let h = Number(input[1]);
  let area = (a * h) / 2;
  let areaFormat = area.toFixed(2);

  console.log(areaFormat);
}

triangleArea(["20", "30"]);
