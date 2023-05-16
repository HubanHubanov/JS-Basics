function depositCalculator(input) {
    let deposit = Number(input[0]);
    let period = Number(input[1]);
    let interestPercentage = Number(input[2]);
    let interestAmount = (interestPercentage * deposit) / 100;
    let finalSum = deposit + period * (interestAmount / 12);

    console.log(finalSum);

}

depositCalculator(["200", "3", "5.7"]);