const rotate = (board)=>{
  const arr = JSON.parse(JSON.stringify(board))
  const N = arr.length
  for(let i = 0; i < N; ++i) {
    for(let j = 0; j < i; ++j) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
  for(let i = 0; i < N; ++i) {
    for(let j = 0; j < N / 2; ++j) {
      let temp = arr[i][j];
      arr[i][j] = arr[i][N - j - 1];
      arr[i][N - j - 1] = temp;
    }
  }
  return arr
}
const checkRow = (board)=> board.reduce((acc,cur)=>[...(new Set(cur))].length === cur.length,true)
const checkColumn = (board) => {
  const arr = rotate(board)
  return checkRow(arr)
}
const checkCube = (board)=>{
  const arr = []
  for (let i = 0; i < 3; i += 1) {
    arr.push(board[0].splice(0, 3)
      .concat(board[1].splice(0, 3), board[2].splice(0, 3)));
    arr.push(board[3].splice(0, 3)
      .concat(board[4].splice(0, 3), board[5].splice(0, 3)));
    arr.push(board[6].splice(0, 3)
      .concat(board[7].splice(0, 3), board[8].splice(0, 3)));
  }
  return checkRow(arr)
}
function doneOrNot(board){
  return checkRow(board) && checkColumn(board) && checkCube(board) ?"Finished!":"Try again!"
}
