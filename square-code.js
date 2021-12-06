const squareCode = function (message) {
  let removeSpace = message.replace(/\s/gi, "");
  let lengthMSG = removeSpace.length
  let cols = (Math.ceil(Math.sqrt(lengthMSG)))
  let cypherText = "";
  for (let i = 0; i < cols; i++) {
    for (let j = i; j < lengthMSG; j += cols) {
      cypherText += removeSpace[j];
    }
    cypherText += '\n';
  } return cypherText
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
