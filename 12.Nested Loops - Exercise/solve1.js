function solve(input) {
    let index = 0;
    let currentInput = input[index]
    let isNonPrime = false;
    let nonPrimeSum = 0;
    let primeSum = 0;


    while (currentInput !== "stop") {
        let number = Number(currentInput);

        if (number < 0 ) {
            console.log("Number is negative.");
            index++;
            currentInput = input[index];
            continue;
        } else {
            for(i = 2; i < number; i++) {
                if (number % i === 0) {
                    isNonPrime = true;
                    break;

                }

            }
        }
        index++;
        currentInput = input[index];

        if (isNonPrime) {
            nonPrimeSum += number
            isNonPrime = false;
        } else {
            primeSum += number
        } 


   
   
   
   
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);


}

solve(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])


