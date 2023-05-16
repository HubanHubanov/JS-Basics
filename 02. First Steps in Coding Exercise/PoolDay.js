function poolDay(input) {
  let peopleNumber = Number(input[0]);
  let entrancePrice = Number(input[1]);
  let loungeChairPrice = Number(input[2]);
  let sunUmbrellaPrice = Number(input[3]);

  let sunUmbrellaNeeded = Number((peopleNumber / 2).toFixed(0));
  let loungeChairNeeded = Number((0.75 * peopleNumber).toFixed(0));

  let entranceTotalPrice = peopleNumber * entrancePrice;
  let loungeChairTotalPrice = loungeChairNeeded * loungeChairPrice;
  let sunUmbrellaTotalPrice = sunUmbrellaNeeded * sunUmbrellaPrice;

  let totalPrice = entranceTotalPrice + loungeChairTotalPrice + sunUmbrellaTotalPrice;
  
  let totalPriceFinal = totalPrice.toFixed(2);
  
  console.log(sunUmbrellaNeeded);
  console.log(loungeChairNeeded);
  console.log(totalPriceFinal + " lv.");
 
}

poolDay(["21", "5.50", "4.40", "6.20"]);
