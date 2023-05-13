function foodDelivey(input) {
    let fish = Number(input[0]);
    let chicken =Number(input[1]);
    let veggie = Number(input[2]);

    let fishCost = fish * 10.35;
    let chickenCost = chicken * 12.40;
    let veggieCost = veggie * 8.15;

    let mainFood = fishCost + chickenCost + veggieCost;
    let dessert = 0.2 * mainFood;

    let food = dessert + mainFood;
    let cost = food + 2.5;

    console.log(food, dessert, cost);
    console.table([food, dessert, cost]);

}

foodDelivey(["2", "4", "3"]);