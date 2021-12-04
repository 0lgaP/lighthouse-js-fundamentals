

// encodeURI(string)--> function replaces cheracters with their UTF-8 representatives
// decodeURI(string)--> opposite


// /\s*(?:=|&|$)\s*/  <--   looks for zero or more spaces, followed by an = or & 
//                          followed by zero or more spaces—and, when found,
//                          removes the spaces and the semicolon
//                          \s mean whitespace
//                           * means 0 or more times

const urlDecode = function (text) {

  let decodedText = decodeURI(text)

  let toArray = decodedText.split(/\s*(?:=|&|$)\s*/)
  let counter = toArray.length


  Array.prototype.toObject = function () {
    let r = {};
    for (let i = 0; i < this.length; i += 2) {
      let key = this[i], value = this[i + 1];
      r[key] = value;
    }

    return r;
  }
  return toArray.toObject()

};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

