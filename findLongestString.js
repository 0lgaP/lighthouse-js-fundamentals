// function sumLargestNumbers(instructors) {
//   let largest = 0;
  
//   for (let i = 0; i < instructors.length; i++) {
//     for (let j = i; j < instructors.length; j++){
//       if (instructors[j] < instructors[i]){
//         largest = instructors[j];
//         instructors[j] = instructors[i];
//         instructors[i] = largest
//       }
//     }
//   } 
//   let sorted = instructors;
//   let biggestNumber = instructors[sorted.length - 1]
//   let secondBiggestNumber = instructors[sorted.length - 2]
//   let result = biggestNumber + secondBiggestNumber;
//   return result;
// }
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


// const instructorWithLongestName = function(instructors) {
//   let longestName = [];
//   for ( let i = 0; i < instructors.length; i++){
//     for (let j = i; j < instructors.length; j++){
//       if (instructors[j].name.length < instructors[i].name.length){
//         longestName = instructors[i].name;
//         instructors[j].name = instructors[i].name;
//         instructors[i].name= longestName;
//       }
//     }
//   }
//   return longestName; 
// };

const instructorWithLongestName = function(instructors){
  let longest = [];
  
  for (let i=0; i<instructors.length; i++){
    for (let j=i; j < instructors.length; j++){
      if(instructors[j].name.length > instructors[i].name.length){
        longest = instructors[j].name
        instructors[j].name = instructors[i].name;
        instructors[i].name = longest
      }
    }
  }
  
  return instructors[0].name;
  
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));