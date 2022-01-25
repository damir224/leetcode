ссылка на задачу 

https://leetcode.com/problems/search-a-2d-matrix/

---
```js
const searchMatrix = function(matrix, target) {
    const h = matrix.length-1, 
          w = matrix[0].length-1; row = 0;
  for(let i = h; i >= 0; i--) {
    if(matrix[i][w] === target) {
      return true
    }
    if(matrix[i][w] > target) {
      row = i
    }
  }
  
  for(let i = w; i >= 0; i--) {
    if(matrix[row][i] === target) return true
  }
  return false
};
```

---
```js
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
```
