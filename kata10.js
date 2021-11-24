const multiplicationTable = function(maxValue) {
  let tables = []
  for (let x = 1; x <= maxValue; x++){
    for (let y = 1; y <= maxValue; y++){
      let mult = x*y;
      tables += mult + " "
      
    }
    tables += "\n"
  }
  return tables
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));