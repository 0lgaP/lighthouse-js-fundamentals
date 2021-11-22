let lol = "";
function laugh(num){
  for (let i = 0; i < num; i++){
      lol = lol + "ha";
  }
  lol = lol + "!";
  return lol; 
}
console.log(laugh("olga"))

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);

function sleep() {
  console.log("I'm sleepy!");
  return "zzz";
  return "snore";
}

sleep();

function square(x) {
  return x * x;
}
console.log((square(5))-4)