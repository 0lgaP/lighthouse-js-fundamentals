const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

const finalPosition = function(moves){
  
  let x = 0;
  let y = 0;
  

  for (const move of moves){
    if (move === 'east'){
      x = x + 1
    }
    if (move === 'west'){
      x = x - 1
    }
    if (move === 'north'){
      y = y + 1
    }
    if (move === 'south'){
      y = y -1
    }
  }
  let route = [x,y]
  return route
}
console.log(finalPosition(moves))