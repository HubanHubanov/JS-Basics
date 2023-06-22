function solve(input) {
 
    let totalJumps = 0;
    let target = Number(input[0]);
    let setInitialHeight = Number(input[0]) - 30; // increment upon success
    let failedJumps = 0;
 
    for (let i = 1; i < input.length; i++) {
 
        totalJumps++;
        let currentHeight = Number(input[i]);
 
        if (currentHeight > setInitialHeight) {
            setInitialHeight += 5;
            failedJumps = 0;
        } else {
            failedJumps++;
        }
 
        if (setInitialHeight > target) {
            console.log(`Tihomir succeeded, he jumped over ${currentHeight}cm after ${totalJumps} jumps.`);
            break;
        };
 
        if (failedJumps >= 3) {
            console.log(`Tihomir failed at ${currentHeight}cm after ${totalJumps} jumps.`);
        };        
    }
}
 
solve(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"])