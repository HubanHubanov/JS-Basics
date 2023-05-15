function trapezoidArea(input) {
  let b1 = Number(input[0]);
  let b2 = Number(input[1]);
  let h = Number(input[2]);
  let s = ((b1 + b2) * h) / 2;
  let s1 = s.toFixed(2);

  let p = Number(input[3]);
  let p1 = Number(p.toFixed(2));

  console.log(s1);
  console.log(p1);
}

trapezoidArea(["8", "13", "7", "3.1415"]);

// let p = Number(input[3]);
// let p = Number(s.toFixed(2))
// .toFixed(2)
//Lazar
//ама връща стринг да знаеш
//Lazar
//ако ти трябва за калкулации го кастваш пак към Number
//Lazar
//Lazar Gerasimov
//или направо Number(result.toFixed(2))
