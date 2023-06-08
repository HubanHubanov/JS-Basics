function travelAgency(input) {
  let city = input[0];
  let service = input[1];
  let discount = input[2];
  let days = Number(input[3]);
  let price = 0;

  if (days > 7) {
    days -= 1;
  }

  switch (city) {
    case "Bansko":

    case "Borovets":
      if (service === "noEquipment") {
        price = 80;
        if (discount === "yes") {
          price = 0.95 * price;
        }
        let cost = price * days;
        if (days < 1) {
          console.log(`Days must be positive number!`);
        } else if (days >= 1) {
          console.log(`The price is ${cost.toFixed(2)}lv! Have a nice time!`);
        }
      } else if (service === "withEquipment") {
        price = 100;
        if (discount === "yes") {
          price = 0.9 * price;
        }
        let cost = price * days;
        if (days < 1) {
          console.log(`Days must be positive number!`);
        } else if (days >= 1) {
          console.log(`The price is ${cost.toFixed(2)}lv! Have a nice time!`);
        }
      } else {
        console.log("Invalid input!");
      }

      break;

    case "Varna":

    case "Burgas":
      if (service === "noBreakfast") {
        price = 100;
        if (discount === "yes") {
          price = 0.93 * price;
        }
        let cost = price * days;
        if (days < 1) {
          console.log(`Days must be positive number!`);
        } else if (days >= 1) {
          console.log(`The price is ${cost.toFixed(2)}lv! Have a nice time!`);
        }
      } else if (service === "withBreakfast") {
        price = 130;
        if (discount === "yes") {
          price = 0.88 * price;
        }
        let cost = price * days;
        if (days < 1) {
          console.log(`Days must be positive number!`);
        } else if (days >= 1) {
          console.log(`The price is ${cost.toFixed(2)}lv! Have a nice time!`);
        }
      } else {
        console.log("Invalid input!");
      }

      break;

    default:
      console.log("Invalid input!");
      break;
  }
}

travelAgency(["Varna", "withBreakfast", "no", "0"]);
