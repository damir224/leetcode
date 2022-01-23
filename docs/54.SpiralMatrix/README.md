ссылка на задачу 

https://leetcode.com/problems/spiral-matrix/


---
```js
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

```
