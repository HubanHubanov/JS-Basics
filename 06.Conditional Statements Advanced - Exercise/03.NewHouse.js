function newHouse(input) {
  let typeFlower = input[0];
  let countFlower = input[1];
  let budget = Number(input[2]);

  let rosesPrice = 5;
  let dahliasPrice = 3.8;
  let tulipsPrice = 2.8;
  let narcissusPrice = 3;
  let gladiolusPrice = 2.5;

  if (typeFlower === "Roses") {
    if (countFlower > 80) {
      priceTotal = 0.9 * (rosesPrice * countFlower);
    } else {
      priceTotal = rosesPrice * countFlower;
    }
  } else if (typeFlower === "Dahlias") {
    if (countFlower > 90) {
      priceTotal = 0.85 * (dahliasPrice * countFlower);
    } else {
      priceTotal = dahliasPrice * countFlower;
    }
  } else if (typeFlower === "Tulips") {
    if (countFlower > 80) {
      priceTotal = 0.85 * (tulipsPrice * countFlower);
    } else {
      priceTotal = tulipsPrice * countFlower;
    }
  } else if (typeFlower === "Narcissus") {
    if (countFlower < 120) {
      priceTotal = 1.15 * (narcissusPrice * countFlower);
    } else {
      priceTotal = narcissusPrice * countFlower;
    }
  } else if (typeFlower === "Gladiolus") {
    if (countFlower < 80) {
      priceTotal = 1.2 * (gladiolusPrice * countFlower);
    } else {
      priceTotal = gladiolusPrice * countFlower;
    }
  }
  if (budget >= priceTotal) {
    console.log(
      `Hey, you have a great garden with ${countFlower} ${typeFlower} and ${(
        budget - priceTotal
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(priceTotal - budget).toFixed(
        2
      )} leva more.`
    );
  }
}
newHouse(["Gladiolus", "64", "160"]);
