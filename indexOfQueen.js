let whiteQueen = [2, 3];
let blackQueen = [1, 4];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

function generateBoard(q1, q2) {
  let board = [];
  for (let x = 0; x < 9; x++) {
    const row = []
    for (let y = 0; y < 9; y++) row.push(0);
    board.push(row);
  };
  board[q1[0]][q1[1]] = 1;
  board[q2[0]][q2[1]] = 1;
  return board
}

function queenThreat(board) {
  let q1 = whiteQueen
  let q2 = blackQueen
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (q1[1] === q2[1]) {
        return true
      } if (q1[0] === q2[0]) {
        return true
      } if (Math.abs(q1[1] - q2[1]) === Math.abs(q1[0] - q2[0])) {
        return true
      } else {
        return false
      }
    }
  }
}

console.table(generatedBoard)
console.log(queenThreat(generatedBoard))