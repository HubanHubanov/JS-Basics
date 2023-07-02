function highJump(input) {
  let targetRecord = Number(input[0]);
  let jumpCounter = 0;
  let fails = 0;
  let target = targetRecord - 30;
  let failed = false;

  for (let i = 1; i < input.length; i++) {
    jumpCounter++;

    let jump = Number(input[i]);

    if (jump > targetRecord) {
      break;
    }

    if (jump > target) {
      fails = 0;
      target += 5;
    } else {
      fails++;
    }

    if (fails === 3) {
      failed = true;
      console.log(`Tihomir failed at ${target}cm after ${jumpCounter} jumps.`);
      break;
    }
  }

  if (!failed) {
    console.log(
      `Tihomir succeeded, he jumped over ${target}cm after ${jumpCounter} jumps.`
    );
  }
}
highJump(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);
