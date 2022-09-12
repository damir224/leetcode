const matrix = [
  [-6, 3, 8, 0, 9],
  [2, -1, 2, 0, 4],
  [0, 1, -6, 1, 2],
  [1, 7, 6, 6, 2],
];

const getMax = (matrix, row, col) => {
  if (row === 0) {
    return matrix[row][col - 1];
  }
  if (col === 0) {
    return matrix[row - 1][col];
  }
  return Math.max(matrix[row - 1][col], matrix[row][col - 1]);
};

const findWayInMatrix_2 = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (row === 0 && col === 0) {
        continue;
      }
      matrix[row][col] += getMax(matrix, row, col);
    }
  }
  return matrix.at(-1).at(-1);
};
console.log('findWayInMatrix_2(matrix)', findWayInMatrix_2(matrix));
