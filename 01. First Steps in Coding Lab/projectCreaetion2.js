function projectsCreation(input) {
    let name = input[0];
    let projects = Number(input[1]);
    let hours = projects * 3;
    let name1 = input[2];
    let projects1 = Number(input[3]);
    let hours1 = projects1 * 3 / 2;

    console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s while the architect ${name1} will need ${hours1} hours to complete ${projects1} project/s`);

}

projectsCreation(["George", "9", "John","10"]);