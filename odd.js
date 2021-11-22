// function isOdd(num){
// return num % 2 !== 0;
// }
// console.log("3 is odd: " + isOdd(3));
// console.log("8 is odd: " + isOdd(8));


const conditionalSum = function(values, condition){
  let even = Number([]);
  let odd = Number([]);
  for (let i = 0; i < values.length; i++){
    if (values[i] % 2 === 0){
      even += values[i];
    } else {
      odd += values[i];
    }
  }
  if (condition === "even"){
    for (let j=0; j < even.length; j++){
      even += [j];
    }
  return even;
  } else if (condition === "odd"){
    return odd;
  } else {
    return 0;
  }
  
}
console.log(conditionalSum([], "odd"));

  // }
  // if (condition === "even"){
  //   for (let j = 0; j < even.length; j++){
  //     even + even[j];
      
  //   } 
  // if (condition === "odd"){
  //     for (let k = 0; k < odd.length; k++){
  //       odd + odd[k];
       
  //     }
  //   }
  // }
  // if (condition === "even"){
  //   return even;
  // }else{
  //   return odd;
  // }