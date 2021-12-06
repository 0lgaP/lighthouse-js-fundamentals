let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = function generatedBoard(whiteQueen, blackQueen) {
  let board = [];
  for (let x = 0; x < 8; x++) {
    const row = []
    for (let y = 0; y < 8; y++) row.push(0);
      board.push(row);
    }
    board[whiteQueen[0]][whiteQueen[1]] = 1;
    board[blackQueen[0]][blackQueen[1]] = 1;
    return board
};
  let queenThreat = function queenThreat(params) {
    for (let i = 0; i<8; i++){
      for (let j = 0; j<8; j++){
        console.log([j])
      }
    }
    
  }




// console.log(generatedBoard(whiteQueen, blackQueen));
console.log(queenThreat(generatedBoard));