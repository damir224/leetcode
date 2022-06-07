ссылка на задачу 

https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/


---

```js
const nearestValidPoint = function (x, y, points) {
  let min = Number.MAX_SAFE_INTEGER,
    index = -1;
  for (let i = 0; i < points.length; i++) {
    const [curX, curY] = points[i];
    if (curX !== x && curY !== y) {
      continue;
    }
    const curMin = Math.abs(curX - x) + Math.abs(curY - y);
    if (curMin < min) {
      min = Math.min(min, curMin);
      index = i;
    }
  }
  return index;
};
```
---
