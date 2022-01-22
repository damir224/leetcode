ссылка на задачу 

https://leetcode.com/problems/number-of-enclaves/


---
```js
const numEnclaves = function (grid) {
  const w = grid.length - 1;
  h = grid[0].length - 1;

  for (let i = 0; i <= w; i++) {
    for (let k = 0; k <= h; k++) {
      if(i === 0 || i === w || k === 0 || k === h) {
        if (grid[i][k]) {
          dfs(grid, i, k, w, h);
        }
      }
    }
  }
  let count = 0

  for (let i = 0; i <= w; i++) {
    for (let k = 0; k <= h; k++) {
      grid[i][k] === 1 && count++
    }
  }
  return count
};

const dfs = (grid, row, col, w, h) => {
  if (row > w || col > h || row < 0 || col < 0 || grid[row][col] === 0) {
    return;
  }
  grid[row][col] = 0
  dfs(grid, row + 1, col, w, h);
  dfs(grid, row - 1, col, w, h);
  dfs(grid, row, col + 1, w, h);
  dfs(grid, row, col - 1, w, h);
};
```
