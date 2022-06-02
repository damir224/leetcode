ссылка на задачу 

https://leetcode.com/problems/median-of-two-sorted-arrays/

---

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const a = nums1.concat(nums2).sort((a,b)=>a-b)
  const l = a.length - 1
  const mid = l / 2
  return l % 2 === 0 ? a[mid] : (a[Math.floor(mid)] + a[Math.floor(mid)+1]) / 2
};
```
---

