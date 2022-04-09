ссылка на задачу 

https://leetcode.com/problems/rotting-oranges/


---
```js
const orangesRotting = function(grid) {
  const rl = grid.length;
  const cl = grid[0].length;
  let fresh = 0, time = -1, q = [];
  for (let i = 0; i < rl; i++) {
    for (let j = 0; j < cl; j++) {
      if(grid[i][j] === 1){
        fresh++
      }
      if(grid[i][j] === 2){
        q.push([i, j])
      }
    }
  }
  if(fresh === 0){
    return 0
  }
  const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  while(q.length !== 0) {
    const ql = q.length
    for (let k = 0; k < ql; k++) {
      const [r, c] = q.shift()
      for (let p = 0; p < direction.length; p++) {
        const [row, col] = [r+direction[p][0], c+direction[p][1]]
        if(row < 0 || row >= rl || col < 0 || col >= cl || grid[row][col] !== 1) {
          continue
        }
        grid[row][col] = 2
        q.push([row, col])
        fresh--
      }
    }
    time++
  }

  return  fresh > 0 ? -1 : time
};
```
---
