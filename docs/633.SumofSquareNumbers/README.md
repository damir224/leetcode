ссылка на задачу 

https://leetcode.com/problems/sum-of-square-numbers/


---
```js
const bs = (lo, hi, t) => {
  while (lo <= hi) {
    const mi = lo + Math.floor((hi - lo) / 2);
    if (mi * mi === t) {
      return true;
    }
    if (mi * mi < t) {
      lo = mi + 1;
    }
    if (mi * mi > t) {
      hi = mi - 1;
    }
  }
  return false;
};
const judgeSquareSum = function (c) {
  for (let i = 0; i * i <= c; i++) {
    const b = c - i * i;
    if (bs(0, b, b)) {
      return true;
    }
  }
  return false;
};

```
