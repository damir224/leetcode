ссылка на задачу 

https://leetcode.com/problems/move-zeroes/


---

this solution doesn't work on larger numbers

```js
const NumMatrix = function(matrix) {
  this.matrix = matrix
};
const dfs = (matrix,row1, col1, row2, col2, r, c, visitedMatrix, count=0) => {
  if(r < row1 || r > row2 || c < col1|| c > col2 || visitedMatrix[r][c]) {
    return 0;
  }
  visitedMatrix[r][c] = true
  count += matrix[r][c]
  count += dfs(matrix, row1, col1, row2, col2, r+1, c, visitedMatrix)
  count += dfs(matrix, row1, col1, row2, col2, r, c+1, visitedMatrix)
  count += dfs(matrix, row1, col1, row2, col2, r-1, c, visitedMatrix)
  count += dfs(matrix, row1, col1, row2, col2, r, c-1, visitedMatrix)
  return count;
}

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  const visitedMatrix = new Array(this.matrix.length).fill(null).map(_=>new Array(this.matrix.length).fill(false))
  return dfs(this.matrix, row1, col1, row2, col2, row1, col1, visitedMatrix)
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

 const numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
 console.log('numMatrix.sumRegion(2, 1, 4, 3)', numMatrix.sumRegion(2, 1, 4, 3)); // return 8 (i.e sum of the red rectangle)
 console.log('numMatrix.sumRegion(1, 1, 2, 2)', numMatrix.sumRegion(1, 1, 2, 2)); // return 11 (i.e sum of the green rectangle)
 console.log('numMatrix.sumRegion(1, 2, 2, 4)', numMatrix.sumRegion(1, 2, 2, 4)); // return 12 (i.e sum of the blue rectangle)
```
---

```js
var NumMatrix = function(matrix) {
  const dp = new Array(matrix.length+1).fill(0).map((_)=>new Array(matrix[0].length+1).fill(0))

  for(let i = 0; i < matrix.length; i++) {
    for(let k = 0; k < matrix[0].length; k++) {
      dp[i+1][k+1] = matrix[i][k] +  dp[i][k+1] + dp[i+1][k] - dp[i][k]
    }
  }
  this.dp = dp
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
return this.dp[row2+1][col2+1] - this.dp[row1][col2+1] - this.dp[row2+1][col1] + this.dp[row1][col1]
};

```
