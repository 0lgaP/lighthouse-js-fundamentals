const repeatNumbers = function(data) {
  let numeral = "";
  let multiply;
  for (let x = 0; x < data.length; x++){
    // console.log(data[x])
    
    for (let y = 0; y < data[x][1]; y++){
      // console.log(data[x][y])
      numeral += data[x][0]
      
    }
  }
  return (numeral)
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));