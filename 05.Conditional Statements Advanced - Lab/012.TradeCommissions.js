function tradeCommissions(input) {
  let city = input[0];
  let sales = Number(input[1]);

  

  if (city === "Sofia") {
    if (sales >= 0 && sales <= 500) {
      percentage = 5;
      console.log(((sales * percentage) / 100).toFixed(2));
    } else if (sales > 500 && sales <= 1000) {
      percentage = 7;
      console.log(((sales * percentage) / 100).toFixed(2));
    } else if (sales > 1000 && sales <= 10000) {
      percentage = 8;
      console.log(((sales * percentage) / 100).toFixed(2));
    } else if (sales > 10000) {
      percentage = 12;
      console.log(((sales * percentage) / 100).toFixed(2));
    } else {
      console.log("error");
    }
  } else if (city === "Varna") {
    if (sales >= 0 && sales <= 500) {
      percentage = 4.5;
      console.log(((sales * percentage) / 100).toFixed(2));
    } else if (sales > 500 && sales <= 1000) {
      percentage = 7.5;
      console.log(((sales * percentage) / 100).toFixed(2));
    } else if (sales > 1000 && sales <= 10000) {
      percentage = 10;
      console.log(((sales * percentage) / 100).toFixed(2));
    } else if (sales > 10000) {
      percentage = 13;
      console.log(((sales * percentage) / 100).toFixed(2));
    } else {
      console.log("error");
    }
  } else if (city === "Plovdiv") {
    if (sales >= 0 && sales <= 500) {
      percentage = 5.5;
      console.log(((sales * percentage) / 100).toFixed(2));
    } else if (sales > 500 && sales <= 1000) {
      percentage = 8;
      console.log(((sales * percentage) / 100).toFixed(2));
    } else if (sales > 1000 && sales <= 10000) {
      percentage = 12;
      console.log(((sales * percentage) / 100).toFixed(2));
    } else if (sales > 10000) {
      percentage = 14.5;
      console.log(((sales * percentage) / 100).toFixed(2));
    } else {
      console.log("error");
    }
  } else {
    console.log("error");
  }
}
tradeCommissions(["Sofia", "1500"]);
