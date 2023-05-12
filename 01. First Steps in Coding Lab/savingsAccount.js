function savingsAccount(input) {
    let depositSum = Number(input[0]);
    let period = Number(input[1]);
    let interestPercentage = Number(input[2]);
    interestAmount = period * (((interestPercentage / 100) * depositSum) / 12);
    sum = depositSum + interestAmount;

    console.log(interestAmount);
    console.log(sum);

}

savingsAccount(["200", "3", "5.7"]);