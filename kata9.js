// const camelCase = function(input) {
//   let camel= "";
//   let words = [];
  
//   for (let x = 0; x < input.length; x++){
//      camel.push(ToUpperCase(input[x][0]))
    
//     if (input[x] === " "){
//       words.push((imput[x]).ToUpperCase)
//     }
//   }
//   console.log(camel)
// };

function camelCase(str) {
   
  return str
  // First we take the character at index 0 and convert to uppercase 
  // + next we slice or "add a copy of" the rest of the array after the index 0 
      .charAt(0).toUpperCase() + str.slice(1)
  //(/.../) is a regular expression literal - creates new RegExp object
  //g meanls match globally - this allows the regex to match multiple times
  // \s is a regEx means "any whitespace cheracter"
  //anything between the /../ will be evaluated against the input,
  //any matches will be passed through the function
  //so search for "\s"(which is short form for whitespace or equivalent like tab)
  // if "\s" then replace it with
  .replace(/\s(.)/g, function(a) {
          return a.toUpperCase();
      })
  // replace "/\s(.)/g" with "" or "no space"
      .replace(/\s/g, '')
  // replace "/\s(.)/g" 
      // .replace(/^(.)/, function(b) {
      //     return b.toLowerCase();
      // });
;
}

function camelCase(str) {
  return str
      .charAt(0).toUpperCase() + str.slice(1)
      .replace(/\s(.)/g, function(a) {
          return a.toUpperCase();
      })
      .replace(/\s/g, '')
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));