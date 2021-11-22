// function range(start, end, step){
//   let myArray = [];
//   for (let i = start; i < end; i + step){
//     myArray.push([i]);
//   }
//   return myArray;
// }
// console.log(range(0, 10, 2));
// let myArray = [];

// for (let i = 0; i <= 10; i+=2){
//   myArray.push(i);
 
// }
// console.log(myArray)

function range(start, end, step){

  let myArray = [];
  if (start > end || step <= 0 || start === undefined || end === undefined || step === undefined){
    return myArray;
  }
  for ( let i = start; i <= end; i+=step){
    myArray.push(i);
  }
  return myArray;
    
}
console.log(range(0, 10, 2))