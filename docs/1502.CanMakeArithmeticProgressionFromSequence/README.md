ссылка на задачу 

https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

---

```js
const canMakeArithmeticProgression = function (arr) {
  const arr1 = arr.sort((a, b) => a - b);
  let diff = arr1[1] - arr1[0];
  for (let i = 2; i < arr1.length; i++) {
    const curDiff = arr1[i] - arr1[i - 1];
    if (diff !== curDiff) {
      return false;
    }
  }
  return true;
};

```
---
