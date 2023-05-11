function yardGreening(input) {
    let squareMeters = input[0];
    let sum = squareMeters * 7.61;
    let discount = 0.18 * sum;
    let finalSum = sum - discount; 

    console.log(finalSum);

}

yardGreening(["100"]);