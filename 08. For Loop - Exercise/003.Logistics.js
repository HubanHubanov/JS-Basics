function logistics(input) {
  let loadsNumber = Number(input[0]);
  let cost = 0;
  let loadTotal = 0;
  let miniBusLoad = 0;
  let truckLoad = 0;
  let trainLoad = 0;

  for (let i = 1; i < input.length; i++) {
    load = Number(input[i]);
    if (load <= 3) {
      miniBusLoad += load;
      loadTotal += load;
      cost += 200 * load;
    } else if (load <= 11) {
      truckLoad += load;
      loadTotal += load;
      cost += 175 * load;
    } else {
      trainLoad += load;
      loadTotal += load;
      cost += 120 * load;
    }
  }

  let avgCost = cost / loadTotal;
  let minibusPercentage = (miniBusLoad / loadTotal) * 100;
  let truckPercentage = (truckLoad / loadTotal) * 100;
  let trainPercentage = (trainLoad / loadTotal) * 100;

  console.log(avgCost.toFixed(2));
  console.log(`${minibusPercentage.toFixed(2)}%`);
  console.log(`${truckPercentage.toFixed(2)}%`);
  console.log(`${trainPercentage.toFixed(2)}%`);
}

logistics(["5", "2", "10", "20", "1", "7"]);
