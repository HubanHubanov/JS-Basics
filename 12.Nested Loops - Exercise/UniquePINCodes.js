function uniquePinCodes(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);

    for(let i = 1; i <= num1; i++) {
        if (i % 2 !== 0) {
               continue;     
        } 
        for(let j = 2; j <=num2; j++) {
            for(let prime = 2; prime <= num2; prime++) {
                 if (j % prime === 0 && j !== prime) {
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