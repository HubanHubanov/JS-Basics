function repainting(input) {
  let nylon = Number(input[0]);
  let paint = Number(input[1]);
  let paintThinner = Number(input[2]);
  let hoursNeeded = Number(input[3]);

  let nylonCost = nylon * 1.5;
  let paintCost = paint * 14.5;
  let paintThinnerCost = paintThinner * 5.0;

  let paintCostTotal = paintCost + 0.1 * paintCost;
  let nylonCostTotal = nylonCost + 2 * 1.5;

  let materials = paintCostTotal + nylonCostTotal + paintThinnerCost + 0.4;

  let labourCostPerHour = 0.3 * materials;
  let labourCost = labourCostPerHour * hoursNeeded;

  let finalCost = materials + labourCost;

  console.log(finalCost);
}

repainting(["10", "11", "4", "8"]);
