function decimalTest(input) {
    let number = Number(input[0]);
    let convert = Number(number.toFixed(2));

    console.log(convert);

}

decimalTest(["2.43434899"]);