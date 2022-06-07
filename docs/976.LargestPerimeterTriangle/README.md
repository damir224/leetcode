ссылка на задачу 

https://leetcode.com/problems/largest-perimeter-triangle/


---
```js
const largestPerimeter = function (nums) {
  const newNums = nums.sort((a, b) => a - b);
  let p = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (newNums[i] + newNums[i + 1] > newNums[i + 2]) {
      p = Math.max(p, newNums[i] + newNums[i + 1] + newNums[i + 2]);
    }
  }
  return p;
};
```
