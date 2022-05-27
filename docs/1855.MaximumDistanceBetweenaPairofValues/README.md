ссылка на задачу 

https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/


---

```js
const bs = (nums, target, lo, hi = nums.length - 1) => {
  while (lo <= hi) {
    const mi = lo + Math.floor((hi - lo) / 2);
    if (nums[mi] < target) {
      hi = mi - 1;
    }
    if (nums[mi] >= target) {
      lo = mi + 1;
    }
  }

  return hi;
};
const maxDistance = function (nums1, nums2) {
  let distance = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] <= nums2[i]) {
      const curDistance = bs(nums2, nums1[i], i) - i;
      distance = Math.max(distance, curDistance);
    }
  }
  return distance;
};

```
---

