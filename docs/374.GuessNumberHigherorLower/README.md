ссылка на задачу 

https://leetcode.com/problems/move-zeroes/


---
```js
const guessNumber = function(n, min = 0) {
  const g = Math.floor((n+min)/2);
  while(n >= min) {
    const resG = guess(g)
    if (resG === 1) {
      return guessNumber(n, g + 1)
    } else if (resG === -1) {
      return guessNumber(g - 1, min)
    } else {
      return g
    }
  }
};
```
---
