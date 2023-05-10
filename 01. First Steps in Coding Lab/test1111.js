function test111 (input) {
    let name = input[0];
    let surname = input[1];
    let age = Number(input[2]);

    console.log(name + " " + surname + " @ " + age);

}

test111(["Huban", "Hubanov", 38]);