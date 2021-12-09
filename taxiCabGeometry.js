
// Using array to object conversion sepporate values and keys


// Using array to object conversion sepporate values and keys
const blocksAway = function (directions) {
  let result = { east: 0, north: 0 }
  let compass = [];
  let spaces = [];
  for (let i = 0; i < directions.length; i += 2) {
    compass.push(directions[i])
    spaces.push(directions[i + 1])
  }
  let rose = {
    direction: compass,
    duration: spaces
  }
 // Set up the initial direction we face according to the first value of the direction key
  let facingIn = whereAmI(rose.direction[0]);
 // Create function to set the initial diection
  function whereAmI(x) {
    if(x === "right"){
      return "north"
    }else{
      return "east"
    }
  }
// each time the loop runs:
// create a for-loop with logic to convert left and right into compass directions
// update the current direction we are facing
  for (let i = 0; i < rose.direction.length; i++) {
    console.log(facingIn)
    
    if (rose.direction[i] === "left" && facingIn === "east" || rose.direction[i] === "right" && facingIn === "west") {
      result.north += rose.duration[i];
      facingIn = "north"
      console.log(rose.direction[i] + " added to north, now facing " + facingIn)
    }
    else if (rose.direction[i] === "right" && facingIn === "east" || rose.direction[i] === "left" && facingIn === "west") {
      result.north -= rose.duration[i];
      facingIn = "south"
      console.log("subtracted from north, now facing " + facingIn)
    }
    else if (rose.direction[i] === "left" && facingIn === "north" || rose.direction[i] === "right" && facingIn === "south") {
      result.east -= rose.duration[i];
      facingIn = "west"
      console.log("subtracted from east, now facing " + facingIn)
    }
    else if (rose.direction[i] === "right" && facingIn === "north" || rose.direction[i] === "left" && facingIn === "south") {
      result.east += rose.duration[i];
      facingIn = "east"
      console.log("added to east, now facing " + facingIn)
    }
  }

  return result
};



console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));