function multiplyTable(input) {
    let numberToString = "" + input[0];
  
    
    
  
      for (let a = 1; a <= Number(numberToString[2]); a++) {
        for (let b = 1; b <= Number(numberToString[1]); b++) {
          for (let c = 1; c <= Number(numberToString[0]); c++) {
            
            console.log(`${a} * ${b} * ${c} = ${a * b * c};`);
          }
        }
      }
    
}
  
  multiplyTable(["324"]);
  