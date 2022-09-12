const matrix = [
  [-6, 3, 8, 0, 9],
  [2, -1, 2, 0, 4],
  [0, 1, -6, 1, 2],
  [1, 7, 6, 6, 2],
];

// const matrix1 = [
//   [-6, -3, 5, 5, 14],
//   [-4, -4, 7, 7, 18],
//   [-4, -3, 1, 8, 20],
//   [-3, 4, 10, 16, 22],
// ];

const findWayInMatrix = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = row === 0 ? 1 : 0; col < matrix[0].length; col++) {
      const upCount = row === 0 ? Number.MIN_SAFE_INTEGER : matrix[row - 1][col] + matrix[row][col];
      const leftCount = col === 0 ? Number.MIN_SAFE_INTEGER : matrix[row][col - 1] + matrix[row][col];
      matrix[row][col] = Math.max(upCount, leftCount);
      
    }
  }
  return matrix.at(-1).at(-1);
};
console.log('findWayInMatrix(matrix)', findWayInMatrix(matrix));
