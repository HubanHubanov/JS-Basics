function seriesCalculator(input) {
    let name = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let durationNoTrailers = Number(input[3]);

    let durationTrailers = 0.20 * durationNoTrailers;
    let durationTotal = durationTrailers + durationNoTrailers;
    let extraTime = seasons * 10;

    let totalTime = (seasons * episodes * durationTotal) + extraTime

    console.log(`Total time needed to watch the ${name} series is ${totalTime} minutes.`);


}

seriesCalculator(["Lucifer", "3", "18", "55"]);

