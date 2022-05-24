ссылка на задачу 

https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/


---
```js
const kWeakestRows = function (mat, k) {
  return mat
    .reduce((acc, cur, i) => {
      let lo = 0,
        hi = cur.length - 1;
      while (lo <= hi) {
        const mi = lo + Math.floor((hi - lo) / 2);
        if (cur[mi] === 0) {
          hi = mi - 1;
        }
        if (cur[mi] === 1) {
          lo = mi + 1;
        }
      }
      acc.push({ value: lo, index: i });
      return acc;
    }, [])
    .sort((a, b) => a.value - b.value)
    .splice(0, k)
    .map(({ index }) => index);
};

```
---

```js

```
