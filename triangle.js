function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(num){
  var triangle = "";
  for (let i = 1; i <= num; i++){
      triangle += makeLine([i]);
  }
  return triangle;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));