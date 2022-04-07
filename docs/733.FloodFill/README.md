ссылка на задачу 

https://leetcode.com/problems/find-pivot-index/


---
tc - O(row*col)

sc - O(n)
```js
const dfs = (image, row, col, newColor, curColor) => {
  const rowL = image.length;
  const colL = image[0].length;
  if (
    row < 0 ||
    row >= rowL ||
    col < 0 ||
    col >= colL ||
    image[row][col] !== curColor ||
    image[row][col] === newColor
  ) {
    return false;
  }
  image[row][col] = newColor

  dfs(image, row+1, col, newColor, curColor)
  dfs(image, row-1, col, newColor, curColor)
  dfs(image, row, col+1, newColor, curColor)
  dfs(image, row, col-1, newColor, curColor)
}

const floodFill = function(image, sr, sc, newColor) {
  const curColor = image[sr][sc]
  dfs(image, sr, sc, newColor, curColor)
  return image
};


console.log('floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)', floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)) //[[2,2,2],[2,2,0],[2,0,1]]
console.log('floodFill([[0,0,0],[0,0,0]], 0, 0, 2)', floodFill([[0,0,0],[0,0,0]], 0, 0, 2)) //[[2,2,2],[2,2,2]]
console.log('floodFill([[0,0,0],[1,0,0]], 1, 0, 2)', floodFill([[0,0,0],[1,0,0]], 1, 0, 2)) // [[0,0,0],[2,0,0]]


```
