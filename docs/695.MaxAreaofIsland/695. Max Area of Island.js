const dfs = (grid, row, col) => {
  const rowL = grid.length
  const colL = grid[0].length
  if ((row < 0 || rowL <= row) || (col < 0 || colL <=col) || grid[row][col] !== 1) {
    return 0
  }
  let count = 1
  grid[row][col] = 2
  count += dfs(grid, row, col+1)
  count += dfs(grid, row, col-1)
  count += dfs(grid, row+1, col)
  count += dfs(grid, row-1, col)
  return count
}
const maxAreaOfIsland = function(grid) {
  const rowL = grid.length
  const colL = grid[0].length
  let maxArea = 0
  for (let i = 0; i < rowL; i++) {
    for (let j = 0; j < colL; j++) {
      if(grid[i][j] === 1) {
        maxArea = Math.max(dfs(grid, i, j), maxArea)
      }
    }
  }
  return maxArea
};

console.log('1', maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]])); // 6
console.log('2', maxAreaOfIsland([[0,0,0,0,0,0,0,0]])); // 0
console.log('3', maxAreaOfIsland([[0,1,1],[0,1,0],[0,1,0]])); // 4
