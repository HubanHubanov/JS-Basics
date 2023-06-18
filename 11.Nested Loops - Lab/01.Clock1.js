function clock() {
  for (let hours = 0; hours < 24; hours++) {
    for (let mins = 0; mins < 60; mins++) {
      let buff = "";
      let buff1 = "";

      if (hours < 10) {
        buff += "0" + hours;
      } else {
        buff += hours;
      }
      if (mins < 10) {
        buff1 += "0" + mins;
      } else {
        buff1 += mins;
      }

      console.log(buff + ":" + buff1);
    }
  }
}

clock();
