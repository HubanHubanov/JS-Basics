function hotelRoom(input) {
  let month = input[0];
  let nights = Number(input[1]);
  let studio = 0;
  let apartment = 0;

  if (month === "May" || month === "October") {
    studio = 50;
    apartment = 65;
  } else if (month === "June" || month === "September") {
    studio = 75.2;
    apartment = 68.7;
  } else if (month === "July" || month === "August") {
    studio = 76;
    apartment = 77;
  }

  if (nights > 7 && nights <= 14 && month === "May" || month === "October") {
    studio *= 0.95;
  } else if (nights > 14 && month === "May" || month === "October") {
    studio *= 0.7;
    apartment *= 0.9;
  } else if (nights > 14 && month === "June" || month === "September") {
    studio *= 0.8;
    apartment *= 0.9;
  } else if (nights > 14) {
    apartment *= 0.9;
  }

  console.log(`Apartment: ${(nights * apartment).toFixed(2)} lv.`);
  console.log(`Studio: ${(nights * studio).toFixed(2)} lv.`);
}
hotelRoom(["August", "20"]);
