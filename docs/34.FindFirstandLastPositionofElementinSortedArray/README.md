ссылка на задачу 

https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/


---

```js
const searchRange = function (nums, target) {
  if (!nums.length) {
    return [-1, -1];
  }
  let lo = 0, hi = nums.length - 1;
  const arr = [];

  while (lo < hi) {
    const mi = lo + Math.floor((hi - lo) / 2);
    if (nums[mi] >= target) {
      hi = mi;
    }
    if (nums[mi] < target) {
      lo = mi + 1;
    }
  }
  if (nums[lo] !== target) {
    return [-1, -1];
  } else {
    arr.push(lo);
  }
  hi = nums.length - 1;
  while (lo < hi) {
    const mi = lo + Math.floor((hi - lo) / 2);
    if (nums[mi] <= target) {
      lo = mi + 1;
    }
    if (nums[mi] > target) {
      hi = mi;
    }
  }

  arr.push(nums[lo] === target ? lo : lo - 1);
  return arr;
};


```

