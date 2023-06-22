function highJump(input) {
    let target = Number(input[0]);
    let totalJumpsCounter = 0;
    let failedJumpsCounter = 0;
    let targetJump = target - 30;
    let currentJump = 0;
    let failed = false;

    for (i = 1; i < input.length; i++) {
        totalJumpsCounter++;
        
        currentJump = Number(input[i]);

        if (currentJump > target) {
            break;
        }
       
       
        if (currentJump > targetJump) {
            failedJumpsCounter = 0;
            targetJump += 5;
            

        } else {
            failedJumpsCounter++;
        }
   
   
        if (failedJumpsCounter >= 3) {
            failed = true;
            console.log(`Tihomir failed at ${targetJump}cm after ${totalJumpsCounter} jumps.`);
            break;
    }

   }
   if (!failed) {
   console.log(`Tihomir succeeded, he jumped over ${targetJump}cm after ${totalJumpsCounter} jumps.`);
   }


}

highJump(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"])