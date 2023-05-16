function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let hoursNeeded = Number(input[3]);
    
    let nylonCost = nylon * 1.50;
    let paintCost = paint * 14.50;
    let paintThinnerCost = paintThinner * 5.00;
    
    let paintCostTotal = paintCost + 0.1 * paintCost;
    let nylonCostTotal = nylonCost + 2 * 1.50;
    
    let materials = paintCostTotal + nylonCostTotal + paintThinnerCost + 0.40;
    
    let labourCostPerHour = 0.30 * materials;
    let labourCost = labourCostPerHour * hoursNeeded;
    
    let finalCost = materials + labourCost;

    console.log(finalCost);

}

repainting(["10", "11", "4", "8"]);





