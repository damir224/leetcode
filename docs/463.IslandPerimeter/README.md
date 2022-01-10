ссылка на задачу 

https://leetcode.com/problems/island-perimeter/


---

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let count = 0
    for(let i = 0; i<grid.length; i++){
      for(let k = 0; k<grid[i].length; k++){
        if(grid[i][k] === 1) {
          count += perimetrCount(grid, i, k+1)
          count += perimetrCount(grid, i, k-1)
          count += perimetrCount(grid, i+1, k)
          count += perimetrCount(grid, i-1, k)
        }
      }
    }
    return count
};

const perimetrCount = (grid, row, col) => {
  if(row >= 0 && col >= 0 && row < grid.length && col < grid[row].length) {
    return grid[row][col] === 1 ? 0 : 1
  }
  return 1
}
```
---

```java
class Solution {
  public int islandPerimeter(int[][] grid) {
    int count = 0;
    for (int row = 0; row < grid.length; ++row) {
      for (int col = 0; col < grid[row].length; ++col) {
        if (grid[row][col] == 1) {
          count += dfs(grid, row, col+1);
          count += dfs(grid, row, col-1);
          count += dfs(grid, row+1, col);
          count += dfs(grid, row-1, col);
        };
      }
    }
    return count;
  }
  int dfs(int[][] grid, int row, int col) {
    if (row >= grid.length || col >= grid[0].length || row < 0 || col < 0 || grid[row][col] == 0) {
      return 1;
    }
    return 0;
  }
}
```


