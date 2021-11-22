const urlEncode = function(text) {
  text = text.trim()
  let html20 = [];
  let result = [];
  for (let i = 0; i < text.length; i++){
    if(text[i] === " "){
      html20.push("%20")
    } else {
      html20.push(text[i])
    }
  }
  for (let j = 0; j < html20.length; j++){
    result += html20[j];
  }
  return result
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
