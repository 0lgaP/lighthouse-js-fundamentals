

const makeCase = function (input, lcase) {
  let output = "";
  let caseType = [];
  
  const capitalizeString = (str) =>
    // take string at index 0, capitalise at index 0 
    //+ 
    //slice string at index 1 and convert everything that follows to lowercase
    str[0].toUpperCase() + str.slice(1).toLowerCase();

  const toPascalCase = (str) =>
    //str.split(" ") creates an array, where each item is found by the presence of empty space
    //.map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    // we are using the capitalizeString function
    //then join all of the items in the array with no spaces
    str.split(" ").map(capitalizeString).join("");
  
  const toCamelCase = (str) => {
    let text = toPascalCase(str)
    return text[0].toLowerCase() + text.slice(1)
  }

  const toSnakeCase = (str) => 
  str.split(" ").join("_")

  const toKebabCase = (str) =>
  str.split(" ").join("-")

  const toTitleCase = (str) =>
  capitalizeString(str)

  const toVowelCase = function(str) {
    //declare empty array called result
    let result = []
    //declare regEx so that it captures all vowels
    let regEx = /[aeiouy]/;
    //loop through the peramiter str
    for (let i = 0; i < str.length; i++){
      // if test method finds a match, it returns true, otherwise it returns false.
      // we test on the peramiter's cheracter at index i (every time it loops i++)
      if (regEx.test(str.charAt(i))){
        //if the test is true, convert the charAt(i) to uppercase
        //then push to the result variable
        result.push(str.charAt(i).toUpperCase()) 
      } else {
        //else, push the charAt(i) as is
        result.push(str.charAt(i))
      }
    }
    //return the variable result after joining it using "" or no spaces
    return result.join("")
  }

  const toConsonantCase = function(str) {
    let result = []
    let regEx = /[bcdfghjklmnpqrstvwxys]/;
    for (let i = 0; i < str.length; i++){
      if (regEx.test(str.charAt(i))){
        result.push(str.charAt(i).toUpperCase()) 
      } else {
        result.push(str.charAt(i))
      }
    }
    return result.join("")
  }

  const toUpperCase = (str) => 
  //replace each 'empty space' or regEx /\s+/g with "_"
  ///\s+/g pulls each contiguous string of space characters 
  //and ", "_" replaces that space with the "_"
  //then everything is passed to the touppercase method
    str.replace(/\s+/g, "_").toUpperCase();
  



  
  if (lcase === "camel"){
   return toCamelCase(input)
  }
  else if (lcase == "pascal"){
    return toPascalCase(input)
  }
  else if (lcase === "snake"){
    return toSnakeCase(input)
  }
  else if (lcase === "kebab"){
    return toKebabCase(input)
  }
  else if(lcase === "title"){
    return toTitleCase(input)
  }
  else if( lcase === "vowel"){
    return toVowelCase(input)
  }
  else if(lcase === "consonant"){
    return toConsonantCase(input)
  }
  else if (lcase === "upper"){
    return toUpperCase(input)
  }
}







console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));