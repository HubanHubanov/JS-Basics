function easterLunch(input) {
  let easterBreadNum = Number(input[0]);
  let packsEggsNum = Number(input[1]);
  let kgCookies = Number(input[2]);

  let easterBreadPrice = 3.2;
  let packEggsPrice = 4.35;
  let kgCookiesPrice = 5.4;
  let paintForOneEgg = 0.15;

  let paintNeedet = packsEggsNum * 12 * paintForOneEgg;
  let easterBreadCost = easterBreadNum * easterBreadPrice;
  let eggsCost = packsEggsNum * packEggsPrice;
  let cookiesCost = kgCookies * kgCookiesPrice;
  let totalCost = cookiesCost + eggsCost + easterBreadCost + paintNeedet;

  console.log(totalCost.toFixed(2));
}

easterLunch(["3", "2", "3"]);
