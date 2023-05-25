function football(input) {

    let firstResult = input[0];
    let secondResut = input[1];
    let thirdResult = input[2];

    let wonMatchesCount = 0;
    let lostMatchesCount = 0;
    let drawMatchesCount = 0;

    // first match

    console.log(firstResult);

    let homeTeamResultFromMatchOne = Number(firstResult[0]);
    let guestTeamResultFromMatchOne = Number(firstResult[2]);

    // console.log(homeTeamResultFromMatchOne);
    // console.log(guestTeamResultFromMatchOne);

    

    if (homeTeamResultFromMatchOne > guestTeamResultFromMatchOne) {
        wonMatchesCount = wonMatchesCount + 1; 
    } else if (homeTeamResultFromMatchOne === guestTeamResultFromMatchOne) {
        drawMatchesCount = drawMatchesCount + 1;
    } else if (homeTeamResultFromMatchOne < guestTeamResultFromMatchOne) {
        lostMatchesCount = lostMatchesCount + 1;
    }

    console.log(wonMatchesCount);



}
football(["3:1", "0:2", "0:0"])