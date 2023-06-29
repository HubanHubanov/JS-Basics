function uniquePinCodes(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);

   // let number = Number(input[2]);



   
   
    for(let i = 1; i <= num1; i++) {
        if (i % 2 !== 0) {
               continue;     
        } 
        for(let j = 1; j <=num2; j++) {
            for(let primeCheck = 2; primeCheck < j; primeCheck++) {
                if ( j % primeCheck === 0 ) {
                continue;
                }
           
    

           
            for(let k = 1; k <= num3; k++) {
                if (k % 2 !== 0) {
                    continue;
                } 
                console.log(`${i} ${j} ${k} `);
            
            }
        }
    }

    }
}

uniquePinCodes(["3", "5", "5"]);