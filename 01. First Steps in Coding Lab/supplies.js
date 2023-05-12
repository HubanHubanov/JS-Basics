function supplies(input) {
    let pensNUmber = Number(input[0]);
    let markersNumber = Number(input[1]);
    let detergentL = Number(input[2]);
    let discountPercenatage = Number(input[3]);
    let sum = pensNUmber * 5.80 + markersNumber * 7.20 + detergentL * 1.20;
    let discountAmount = (discountPercenatage * sum) / 100;
    let sumFinal = sum - discountAmount;

    console.log(sumFinal)

}

supplies(["2", "3", "4", "25"]);