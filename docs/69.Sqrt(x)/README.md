ссылка на задачу 

https://leetcode.com/problems/sqrtx/


---
```js
const mySqrt = function (x) {
  if (x === 0) {
    return 0;
  }

  let lo = 1,
    hi = Math.floor(x / 2) + 1;
  while (lo <= hi) {
    const mi = lo + Math.floor((hi - lo) / 2);
    const miDouble = mi * mi;

    if (miDouble === x) {
      return mi;
    }
    
    if (miDouble > x) {
      hi = mi - 1;
    }
    if (miDouble < x) {
      lo = mi + 1;
    }
  }
  return hi;
};

```
