ссылка на задачу 

https://leetcode.com/problems/search-in-rotated-sorted-array/


---

```js
var search = function (nums, target) {
  let lo = 0,
    hi = nums.length-1;
  while (lo < hi) {
    const mi = lo + Math.floor((hi - lo) / 2);
    if (nums[mi] === target) {
      return mi;
    }
    if (nums[lo] < nums[mi]) {
      if (nums[lo] <= target && nums[mi] > target) {
        hi = mi - 1;
      } else {
        lo = mi + 1;
      }
    } else if (nums[hi] > nums[mi]){
      if (nums[mi] < target && nums[hi] >= target) {
        lo = mi + 1;
      } else {
        hi = mi - 1;
      }
    } else {
      break;
    }
  }
  return nums[hi]===target ? hi : -1;
};

```

