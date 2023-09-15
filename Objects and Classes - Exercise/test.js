function solve() {
    let arr = ["Ben", "Peter", "John", "Smith", "Sam"];
  
    let resArr = [];
  
    arr.forEach((row) => {
      let name = row;
      resArr.push({ name });
    });
  
    let find = resArr.find((x) => x.name === "Ben");
  
    find.age = 39;
    find.job = "warehouse operative";
  
    console.log(find);
  }
  solve();
  