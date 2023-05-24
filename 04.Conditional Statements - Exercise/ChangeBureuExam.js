function changeBureu(input) {
  let bitcoinNum = Number(input[0]);
  let yuanNum = Number(input[1]);
  let chargePercentage = Number(input[2]);

  let bitcoin = 1168;
  let usd = 1.76;
  let yuan = 0.15 * usd;
  let euro = 1.95;

  let bitcoinSum = bitcoin * bitcoinNum;
  let bitcoinInEur = bitcoinSum / euro;

  let yuanSum = yuan * yuanNum;
  let yuanInEur = yuanSum / euro;

  let totalEur = bitcoinInEur + yuanInEur;
  let chargeSum = (chargePercentage / 100) * totalEur;
  let finalMoney = totalEur - chargeSum;

  console.log(finalMoney.toFixed(2));
}

changeBureu(["1", "5", "5"]);
