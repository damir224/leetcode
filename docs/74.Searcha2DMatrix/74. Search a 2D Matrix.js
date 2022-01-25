const searchMatrix = function(matrix, target) {
  let row = matrix.length-1, col  = matrix[0].length-1;
  while (row >= 0 && col >= 0 && row <= matrix.length-1) {
    if (matrix[row][col] === target) {
      return true;
    }
    if (matrix[row][col] > target) {
      if (row === 0) {
        col--
      } else {
        row--
      }
    } else {
      row++;
      col--;
    }
  }
  return false
};


// console.log('searchMatrix([], 3)', searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)); // true
// console.log('searchMatrix([], 13)', searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // false
console.log('searchMatrix([], 2)', searchMatrix([[1,1]], 2)); // false
