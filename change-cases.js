const makeCase = function (input, lcase) {
  let caseArray = [].concat(lcase)
  let arrayLength = caseArray.length
  for (y = 0; y < arrayLength; y++) {
    let output = input;
    if (caseArray[y] === "camel") {
      output = toCamelCase(output)
    }
    else if (caseArray[y] === "pascal") {
      output = toPascalCase(output)
    }
    else if (caseArray[y] === "snake") {
      output = toSnakeCase(output)
    }
    else if (caseArray[y] === "kebab") {
      output = toKebabCase(output)
    }
    else if (caseArray[y] === "title") {
      output = toTitleCase(output)
    }
    else if (caseArray[y] === "vowel") {
      output = toVowelCase(output)
    }
    else if (caseArray[y] === "consonant") {
      output = toConsonantCase(output)
    }
    else if (caseArray[y] === "upper") {
      output = toUpperCase(output)
    }
    return output
  }
  function capitalizeString(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }
  function toPascalCase(str) {
    return str.split(" ").map(capitalizeString).join("");
  }
  function toCamelCase(str) {
    let text = toPascalCase(str);
    return text[0].toLowerCase() + text.slice(1);
  }
  function toSnakeCase(str) {
    return str.split(" ").join("_");
  }
  function toKebabCase(str) {
    return str.split(" ").join("-");
  }
  function toTitleCase(str) {
    return capitalizeString(str);
  }
  function toVowelCase(str) {
    //declare empty array called result
    let result = [];
    //declare regEx so that it captures all vowels
    let regEx = /[aeiouy]/;
    //loop through the peramiter str
    for (let i = 0; i < str.length; i++) {
      // if test method finds a match, it returns true, otherwise it returns false.
      // we test on the peramiter's cheracter at index i (every time it loops i++)
      if (regEx.test(str.charAt(i))) {
        //if the test is true, convert the charAt(i) to uppercase
        //then push to the result variable
        result.push(str.charAt(i).toUpperCase());
      } else {
        //else, push the charAt(i) as is
        result.push(str.charAt(i));
      }
    }
    //return the variable result after joining it using "" or no spaces
    return result.join("");
  }
  function toConsonantCase(str) {
    let result = [];
    let regEx = /[bcdfghjklmnpqrstvwxys]/;
    for (let i = 0; i < str.length; i++) {
      if (regEx.test(str.charAt(i))) {
        result.push(str.charAt(i).toUpperCase());
      } else {
        result.push(str.charAt(i));
      }
    }
    return result.join("");
  }
  function toUpperCase(str) {
    return str.replace(/\s+/g, "_").toUpperCase();
  }
};


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));