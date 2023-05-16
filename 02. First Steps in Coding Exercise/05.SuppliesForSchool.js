function suppliesForSchooll(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let detergent = Number(input[2]);
    let discountPercentage = Number(input[3]);
    let pensCost = pens * 5.80;
    let markersCost = markers * 7.20;
    let detergentCost = detergent * 1.20;
    let suppliesCost = pensCost + markersCost + detergentCost;
    
    let discountAmount = (discountPercentage * suppliesCost) / 100;
    let finalSum = suppliesCost - discountAmount;

    console.log(finalSum);

}

suppliesForSchooll(["2", "3", "4", "25"]);