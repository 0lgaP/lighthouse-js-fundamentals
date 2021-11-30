const calculateChange = function (total, cash) {
  let changeCalculation = cash - total
  let functionResult = {}
  let coinNames = ["Twenty dollars", "Ten dollars", "Five dollars", "Two dollars", "One dollar", "Quarter", "Dime", "Nickel", "Penny"]
  let coinValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1]
  let amount;
  for (i = 0; i < coinValues.length; i++) {
    amount = Math.floor(changeCalculation / coinValues[i])
    if (amount > 0) {
      functionResult[coinNames[i]] = amount;
      changeCalculation = changeCalculation % coinValues[i]

    }
  }
  return functionResult
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));