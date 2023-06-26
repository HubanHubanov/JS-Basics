function clock() {
    let buff1 = "";
    let buff2 = "";
    for (let hours = 0; hours <= 23; hours++) {
      if (hours <= 9) {
        buff1 = `0${hours}`

      } else {
        buff1 = `${hours}`


      }
        for (let mins = 0; mins <= 59; mins++) {
            if (mins <= 9) {
              buff2 = `0${mins}`

            } else {
                buff2 = `${mins}`
            }

            
            console.log(`${buff1}:${buff2}`);
        }
        }
  }
  
  clock();
  