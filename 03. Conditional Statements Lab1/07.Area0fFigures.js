function areaOfFigures(input) {
  let figure = input[0];
  let num1 = Number(input[1]);
  let num2 = Number(input[2]);

  if (figure === "square") {
    let result = num1 * num1;
    console.log(result.toFixed(3));
  } else if (figure === "rectangle") {
    let result = num1 * num2;
    console.log(result.toFixed(3));
  } else if (figure === "circle") {
    let result = Math.PI * num1 * num1;
    console.log(result.toFixed(3));
  } else if (figure === "triangle") {
    let result = (num1 * num2) / 2;
    console.log(result.toFixed(3));
  }
}

areaOfFigures(["triangle", "4.50", "20"]);
