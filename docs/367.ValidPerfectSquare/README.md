ссылка на задачу 

https://leetcode.com/problems/valid-perfect-square/


---

```js
const isPerfectSquare = function (num) {
  if (num < 1) {
    return false;
  }
  if (num === 1) {
    return true;
  }

  let lo = 1,
    hi = num;
  while (lo <= hi) {
    const mi = Math.floor((lo + hi) / 2);
    const miSqr = mi ** 2;
    if (miSqr === num) {
      return true;
    }
    if (miSqr > num) {
      hi = mi - 1;
    } else {
      lo = mi + 1;
    }
    console.log('lo', lo);
    console.log('hi', hi);
  }
  return false;
};

```
---
