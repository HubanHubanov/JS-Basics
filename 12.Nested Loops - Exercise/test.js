function test(input) {
    let index = 0;
    let currentInput = input[index];
    let isNonPrime = false;
    let primeSum = 0;
    let nonPrimeSum = 0;

    while( currentInput !== "stop") {
    
        let number = Number(currentInput);

        for(i = 2; i < number; i++) {
            if (number % i === 0) {
                isNonPrime = true;
                break;
             }
        }

        if (isNonPrime) {
            break;
        }
        index++
        currentInput = input[index];

       
        if (isNonPrime) {
            nonPrimeSum += number
        } else {
            primeSum += number
        }

        

    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);




}

test(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
