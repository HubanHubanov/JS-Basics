function celsiusToFahrenheit(input) {
  let celsius = Number(input[0]);
  let fahrenheit = celsius * (9 / 5) + 32;
  let fahrenheitFormat = fahrenheit.toFixed(2);

  console.log(fahrenheitFormat);
}

celsiusToFahrenheit(["0"]);
