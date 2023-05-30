function summerOutfit(input) {
  let degrees = Number(input[0]);
  let time = input[1];

  switch (time) {
    case "Morning":
      if (degrees >= 10 && degrees <= 18) {
        console.log(
          `It's ${degrees} degrees, get your Sweatshirt and Sneakers.`
        );
      } else if (degrees > 18 && degrees <= 24) {
        console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
      } else if (degrees >= 25) {
        console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
      }
      break;
    case "Afternoon":
      if (degrees >= 10 && degrees <= 18) {
        console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
      } else if (degrees > 18 && degrees <= 24) {
        console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
      } else if (degrees >= 25) {
        console.log(
          `It's ${degrees} degrees, get your Swim Suit and Barefoot.`
        );
      }
      break;
    case "Evening":
      if (degrees >= 10 && degrees <= 18) {
        console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
      } else if (degrees > 18 && degrees <= 24) {
        console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
      } else if (degrees >= 25) {
        console.log(
          `It's ${degrees} degrees, get your Shirt and Moccasins.`
        );
      }
      break;
    default:
      break;
  }
}
summerOutfit(["22", "Afternoon"]);
