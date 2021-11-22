let array1 = [ 1, 2, 3 ];
let array2 = [ 4, 5, 6 ];

// function concat(array1, array2){
//   let string = [];
//   for(let x = 0; x <= array1[x].length; x++){
//     string += array1[x];
//   }
//   for(let y = 0; y <= array2.length; y++){
//     string += array2[y];
//   }
// return string;
// }

// // console.log(concat(array1, array2))
// const joinedList = [];
// const map1 = array1.map(x => x);
// const map2 = array2.map(x => x);
// console.log(map1 + map2)
// function newArray() = 

function concat(arr1, arr2){
  let list = [];
  arr1.map(x => list.push(x));
  arr2.map(y => list.push(y));
  return list;
}
 console.log(concat([2, 5, 8], [6, 8, 0]))