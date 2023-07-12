function sumPrimeNonPrime(input) {
  let index = 0;
  let currentInput = input[index];
  let primeSum = 0;
  let nonPrimeSum = 0;
  let isNonPrime = false;

  while (currentInput !== "stop") {
    let currentNumber = Number(currentInput);

    if (currentNumber < 0) {
      console.log("Number is negative.");
      index++;
      currentInput = input[index];
      continue;
    }

    for (n = 2; n < currentNumber; n++) {
      if (currentNumber % n === 0) {
        nonPrimeSum += currentNumber;
        isNonPrime = true;
        break;
      }
    }

    if (!isNonPrime) {
      primeSum += currentNumber;
    }
    isNonPrime = false;

    index++;
    currentInput = input[index];
  }

  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime(["0", "-9", "0", "stop"]);
