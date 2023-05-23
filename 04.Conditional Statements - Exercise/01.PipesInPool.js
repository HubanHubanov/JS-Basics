function pipesInPool(input) {
  let v = Number(input[0]);
  let p1 = Number(input[1]);
  let p2 = Number(input[2]);
  let h = Number(input[3]);

  let pipeOneTotal = p1 * h;
  let pipeTwoTotal = p2 * h;
  let pipesTotal = pipeOneTotal + pipeTwoTotal;

  let pipesTotalPercentage = (pipesTotal * 100) / v;
  let pipeOnePercentage = (pipeOneTotal * 100) / pipesTotal;
  let pipeTwoPercentage = (pipeTwoTotal * 100) / pipesTotal;

  if (v >= pipesTotal) {
    console.log(`The pool is ${pipesTotalPercentage}% full. 
    Pipe 1: ${pipeOnePercentage}%. Pipe 2: ${pipeTwoPercentage}%.`);
  } else {
    console.log(
      `For ${h} hours the pool overflows with ${pipesTotal - v} liters.`
    );
  }
}
pipesInPool(["1000", "100", "120", "3"]);
