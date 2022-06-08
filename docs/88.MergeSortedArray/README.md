ссылка на задачу 

https://leetcode.com/problems/merge-sorted-array/


---
```js
const merge = function (nums1, m, nums2, n) {
  let l = m - 1,
    r = n - 1;
  for (let lastIndex = m + n - 1; lastIndex >= 0; lastIndex--) {
    const curL = nums1[l];
    const curR = nums2[r];
    if (r < 0) {
      return nums1;
    }
    nums1[lastIndex] = curL > curR ? nums1[l--] : nums2[r--];
  }
  return nums1;
};

```
