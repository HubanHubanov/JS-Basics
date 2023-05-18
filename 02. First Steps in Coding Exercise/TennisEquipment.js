function tennisEquipment(input) {
  let priceTennisRacket = Number(input[0]);
  let numberTennisRackets = Number(input[1]);
  let numberTrainers = Number(input[2]);

  let priceTrainers = (1 / 6) * priceTennisRacket;

  let tennisRacketsCost = priceTennisRacket * numberTennisRackets;
  let trainersCost = priceTrainers * numberTrainers;

  let otherEquipmentCost = 0.2 * (tennisRacketsCost + trainersCost);
  let totalEquipmnet = trainersCost + tennisRacketsCost + otherEquipmentCost;

  let djokovicCut = (1 / 8) * totalEquipmnet;
  let sponsorsCut = (7 / 8) * totalEquipmnet;

  let djokovicCutRound = Math.floor(djokovicCut);
  let sponsorsCutRound = Math.ceil(sponsorsCut);

  console.log(`Price to be paid by Djokovic ${djokovicCutRound}`);
  console.log(`Price to be paid by sponsors ${sponsorsCutRound}`);
}

tennisEquipment(["850", "4", "2"]);
