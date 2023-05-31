function operationsBetweenNumbers(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let operator = input[2];
  let result = 0;
  let evenOdd = 0;
  let left = 0;

  if (operator === "+") {
    result = n1 + n2;
    if (result % 2 === 0) {
      evenOdd = "even";
    } else {
      evenOdd = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);
  } else if (operator === "-") {
    result = n1 - n2;
    if (result % 2 === 0) {
      evenOdd = "even";
    } else {
      evenOdd = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);
  } else if (operator === "*") {
    result = n1 * n2;
    if (result % 2 === 0) {
      evenOdd = "even";
    } else {
      evenOdd = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);
  } else if (operator === "/") {
    if (n2 === 0) {
      console.log(`Cannot divide ${n1} by zero`);
    } else {
      result = n1 / n2;
      console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    }
  } else if (operator === "%") {
    if (n2 === 0) {
      console.log(`Cannot divide ${n1} by zero`);
    } else {
      left = n1 % n2;
      console.log(`${n1} % ${n2} = ${left}`);
    }
  }
}

operationsBetweenNumbers(["10", "0", "%"]);
