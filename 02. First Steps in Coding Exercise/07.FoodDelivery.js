function foodDelivery(input) {
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let veggie = Number(input[2]);

    let chickenCost = chicken * 10.35;
    let fishCost = fish * 12.40;
    let veggieCost = veggie * 8.15;
    
    let foodCost = chickenCost + fishCost + veggieCost;
    let dessert = 0.20 * foodCost;
    let totalCost = foodCost + dessert + 2.50;

    console.log(totalCost);

}

foodDelivery(["2", "4", "3"]);

