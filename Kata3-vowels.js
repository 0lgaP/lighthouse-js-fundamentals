const numberOfVowels = function(data) {
let numberOfVowels = Number();
for (let i = 0; i < data.length; i++){
    if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u"){
      numberOfVowels += 1
    }
  }
 

return numberOfVowels;

};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
