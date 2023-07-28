function highJump(input) {
  let targetJump = Number(input[0]);

  let neededJump = targetJump - 30;

  let currentJump = 0;
  let jumpsCount = 0;
  let failedJump = 0;

  let failed = false;

  for (let i = 1; i < input.length; i++) {
    currentJump = Number(input[i]);

    if (currentJump > neededJump) {
      neededJump += 5;
      failedJump = 0;
    } else {
      failedJump += 1;
    }

    jumpsCount += 1;

    if (failedJump === 3) {
      failed = true;
      console.log(
        `Tihomir failed at ${currentJump}cm after ${jumpsCount} jumps.`
      );
      break;
    }
  }

  if (!(failed) && (currentJump > targetJump)) {
    console.log(
      `Tihomir succeeded, he jumped over ${targetJump}cm after ${jumpsCount} jumps.`
    );
  }
}

highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);
