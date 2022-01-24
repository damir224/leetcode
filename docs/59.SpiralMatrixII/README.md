ссылка на задачу 

https://leetcode.com/problems/spiral-matrix-ii/


---
```js
const generateMatrix = function(n) {
    const matrix = new Array(n).fill([]).map(e=>new Array(n).fill(0))
    var count = 1
    const dfs = (row, col, matrix, c, last = false) => {
      const l = matrix.length-1
      if(row < 0 || col < 0 || row > l || col > l || matrix[row][col] !== 0) return;
      matrix[row][col] = c++
      if(last) dfs(row-1, col, matrix, c, true)
      dfs(row, col+1, matrix, c)
      dfs(row+1, col, matrix, c)
      dfs(row, col-1, matrix, c)
      dfs(row-1, col, matrix, c, true)
    }
    dfs(0,0, matrix, count)
    return matrix
};
```
