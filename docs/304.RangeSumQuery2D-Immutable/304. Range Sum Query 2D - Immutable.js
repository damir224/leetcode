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
