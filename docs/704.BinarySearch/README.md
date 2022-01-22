ссылка на задачу 

https://leetcode.com/problems/find-pivot-index/


---
work in leetcode but doesn't in nodejs
```js
const search = function (nums, target) {
  let min = 0,
    max = nums.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      max = mid + 1;
    } else {
      min = mid - 1;
    }
  }

  return -1;
};

```
