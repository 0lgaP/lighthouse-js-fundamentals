let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

function generateBoard(q1, q2) {
  let board = [];
  for (let x = 0; x < 9; x++) {
    const row = []
    for (let y = 0; y < 9; y++) row.push(0);
    board.push(row);
    
  }
    board[q1[0]][q1[1]] = 1;
    board[q2[0]][q2[1]] = 1;
    return board
}


  
console.log(generatedBoard);
// console.log(typeof(generatedBoard));
// console.log(Object.keys(generatedBoard));
// console.log(Object.values(generatedBoard));
// console.log(generatedBoard.length)
// console.log(generatedBoard[0])

// function horizontal(q1, q2, board) {
//   for (index in board){
//     // console.log(index)
//       for (value in index){
//         if(1 === board[q1[1]]){
//           console.log("queen")
//         } else {
//           console.log("else")
//         }
        
//     }
//   }
  
// }

// for (i in generatedBoard){
//   // console.log(i)
// for (key of generatedBoard[i]){
//   console.log(key)
// }
// }
// console.log(horizontal(whiteQueen, blackQueen, generatedBoard))
// ruminations - nth of an array can be used to search the column?
// should i use [(generatedBoard(whiteQueen, blackQueen))[i]] to loop through the array of arrays?

  // let queenThreat = function queenThreat(params) {
  //   console.log([(generatedBoard(whiteQueen, blackQueen))[0][5]])
     
  //  }

  //  const checkCol = function checkCol(pos, val, board) {
     
  //  }
  




// console.log(queenThreat(generatedBoard));