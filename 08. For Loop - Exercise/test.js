function test(input) {
  let n = Number(input[0]);
  let salary = Number(input[1]);

  let fine = 0;

  for (let i = 2; i <= input.length; i++) {
    let site = input[i];

    switch (site) {
      case "Facebook":
        fine += 150;
        break;

      case "Instagram":
        fine += 100;
        break;

      case "Reddit":
        fine += 50;
        break;
    }
  }
  if (salary <= fine) {
    console.log("You have lost your salary.");
  } else {
    console.log(salary - fine);
  }
}

test(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
