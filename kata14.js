const calculateChange = function(total, cash) {
  let returnValue =  cash - total
  let change = {}
  const coinTypes = ["Twenty dollars", "Ten dollars", "Five dollars", "Two dollars", "One dollar", "Quarter", "Dime", "Nickel", "Penny"]
  const coinValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1]
  let amount;
  for (let i=0; i<coinValues.length; i++){
    console.log(amount)
        amount = Math.floor(returnValue/coinValues[i])
  }
//   for (let i=0; i<coinValues.length; i++){
//     amount = Math.floor(returnValue/coinValues[i])
//     if (amount > 0){
//       change[coinTypes[i]] = amount;
//       returnValue = returnValue%coinValues[i]
//     }
//   }
// return change
return amount
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));