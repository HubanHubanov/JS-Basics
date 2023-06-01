function carToGo(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let carType = 0;
  let carPrice = 0;

  if (budget <= 100) {
    console.log("Economy class");
    if (season === "Summer") {
      carType = "Cabrio";
      carPrice = 0.35 * budget;
    } else if (season === "Winter") {
      carType = "Jeep";
      carPrice = 0.65 * budget;
    }
  } else if (budget <= 500) {
    console.log("Compact class");
    if (season === "Summer") {
      carType = "Cabrio";
      carPrice = 0.45 * budget;
    } else if (season === "Winter") {
      carType = "Jeep";
      carPrice = 0.8 * budget;
    }
  } else {
    console.log("Luxury class");
    carType = "Jeep";
    carPrice = 0.9 * budget;
  }

  console.log(`${carType} - ${carPrice.toFixed(2)}`);
}
carToGo(["99.99", "Summer"]);
