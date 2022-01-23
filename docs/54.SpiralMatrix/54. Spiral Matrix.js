const spiralOrder = function (matrix) {
  const arr = [];
  dfs(0, 0, matrix, arr);
  return arr;
};

const dfs = (row, col, matrix, arr, isEnd) => {
  if (
    col < 0 ||
    row < 0 ||
    row > matrix.length - 1 ||
    col > matrix[row].length - 1 ||
    matrix[row][col] === 101
  ) {
    return;
  }
  arr.push(matrix[row][col]);
  matrix[row][col] = 101;

  if (isEnd) dfs(row - 1, col, matrix, arr, true);

  dfs(row, col + 1, matrix, arr, false);
  dfs(row + 1, col, matrix, arr, false);
  dfs(row, col - 1, matrix, arr, false);
  dfs(row - 1, col, matrix, arr, true);
};

// console.log(`spiralOrder()`, spiralOrder([[1,2,3],[4,5,6],[7,8,9]])) // [1,2,3,6,9,8,7,4,5]
console.log(
  `spiralOrder()`,
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
); // [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
// [1,2,3,4],
// [5,6,7,8],
// [9,10,11,12],
// [13,14,15,16]
