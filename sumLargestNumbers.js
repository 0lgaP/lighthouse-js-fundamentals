// function sumLargestNumbers(array) {
//   let largest = 0;
//   let secondLargest = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > largest){
//       largest = array[i];
//     } for (let j = 0; j < array.length; j++){
//       if (array[j] < array[i]){
//         secondLargest = array[j];
//       } 
//     }
//   }
// return secondLargest;
// }
// 

function sumLargestNumbers(array) {
  let largest = 0;
  
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++){
      if (array[j] < array[i]){
        largest = array[j];
        array[j] = array[i];
        array[i] = largest
      }
    }
  } 
  let sorted = array;
  let biggestNumber = array[sorted.length - 1]
  let secondBiggestNumber = array[sorted.length - 2]
  let result = biggestNumber + secondBiggestNumber;
  return result;
}
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
