ссылка на задачу 

https://leetcode.com/problems/matrix-diagonal-sum/

---

```js
var diagonalSum = function(mat) {
  let upRow = 0,
      bottomRow = mat.length-1,
      firstColumn = 0,
      lastColumn =  mat[0].length - 1,
      sum = 0;
  while(upRow < bottomRow) {
    sum += mat[upRow][firstColumn]
    sum += mat[upRow][lastColumn]
    sum += mat[bottomRow][firstColumn]
    sum += mat[bottomRow][lastColumn]
    upRow++
    firstColumn++
    lastColumn--
    bottomRow--
  }
  if(mat.length % 2 !== 0) {
    sum += mat[upRow][firstColumn]
  }
  return sum
};

```
