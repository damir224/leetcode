ссылка на задачу 

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/


---

```js
const findMin = function (nums) {
  let lo = 0,
    hi = nums.length - 1,
    min = Number.MAX_SAFE_INTEGER;
  while (lo <= hi) {
    const mi = lo + Math.floor((hi - lo) / 2);
    if (nums[lo] <= nums[mi]) {
      min = Math.min(min, nums[lo]);
      lo = mi + 1;
    } else {
      min = Math.min(min, nums[mi]);
      hi = mi - 1;
    }
  }
  return min;
};

```
---

```js

```
---
