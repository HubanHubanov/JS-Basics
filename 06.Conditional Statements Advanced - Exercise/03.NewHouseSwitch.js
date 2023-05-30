function newHouse(input) {
  let flowerType = input[0];
  let flowerCount = Number(input[1]);
  let budget = Number(input[2]);
  let cost = 0;

  switch (flowerType) {
    case "Roses":
      if (flowerCount > 80) {
        cost = 0.9 * (flowerCount * 5);
      } else {
        cost = flowerCount * 5;
      }
      break;

    case "Dahlias":
      if (flowerCount > 90) {
        cost = 0.85 * (flowerCount * 3.8);
      } else {
        cost = flowerCount * 3.8;
      }
      break;

    case "Tulips":
      if (flowerCount > 80) {
        cost = 0.85 * (flowerCount * 2.8);
      } else {
        cost = flowerCount * 2.8;
      }
      break;

    case "Narcissus":
      if (flowerCount < 120) {
        cost = 1.15 * (flowerCount * 3);
      } else {
        cost = flowerCount * 3;
      }
      break;

    case "Gladiolus":
      if (flowerCount < 80) {
        cost = 1.2 * (flowerCount * 2.5);
      } else {
        cost = flowerCount * 2.5;
      }
      break;
    default:
      break;
  }

  if (budget >= cost) {
    console.log(
      `Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(
        budget - cost
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(cost - budget).toFixed(2)} leva more.`
    );
  }
}
newHouse(["Gladious", "64", "160"]);
