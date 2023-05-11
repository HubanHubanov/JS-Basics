function Ben(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[3];

    console.log(`My name is ${firstName} ${lastName} and I am ${age} years old and I am from ${town}.`); 

}

Ben(["HUban", "Hubanov", "38", "Gabrovo"]);