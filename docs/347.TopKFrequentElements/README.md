ссылка на задачу 

https://leetcode.com/problems/top-k-frequent-elements/


---

```js
const topKFrequent = (nums, k) =>
  Object.entries(
    nums.reduce((acc, cur) => {
      acc[cur] = (acc[cur] ?? 0) + 1;
      return acc;
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .reduce((acc, cur) => {
      if (k > 0) {
        acc.push(+cur[0]);
      }
      k--;
      return acc;
    }, []);

```
---
