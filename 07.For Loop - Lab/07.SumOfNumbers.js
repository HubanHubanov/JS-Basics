function sumOfNubers(input) {
  let numberAsText = input[0];
  numberAsText += ""
  let sum = 0;

  for (let i = 0; i < numberAsText.length; i++) {
    let num = Number(numberAsText[i]);
    sum += num;
  }

  console.log(`The sum of the digits is:${sum}`);
}

sumOfNubers(["1234"]);
