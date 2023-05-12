function painting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let workHours = Number(input[3]);

    let nylonCost = nylon * 1.50 + 2 * 1.50;
    let paintCost = paint * 14.50 + 0.1 * paint *14.50;
    let paintThinnerCost = paintThinner * 5.00;

    let sumMaterials = nylonCost + paintCost + paintThinnerCost + 0.40;
    let workCost = workHours * (0.3 * sumMaterials);

    let totalSum = sumMaterials + workCost;

    console.log(totalSum);

}

painting(["10", "11", "4", "8"]);


