ссылка на задачу 

https://leetcode.com/problems/next-greater-element-i/submissions/


---
```js
const nextGreaterElement = function (nums1, nums2) {
  const map = {};
  for (let i = 0; i < nums2.length; i++) {
    let n = -1,
      idx = i;
    while (idx < nums2.length) {
      if (nums2[i] < nums2[idx]) {
        n = nums2[idx];
        break;
      }
      if (map[nums2[idx]]) {
        n = Math.max(n, map[nums2[idx]]);
        break;
      }
      idx++;
    }
    map[nums2[i]] = n;
  }

  const ans = [];
  for (let i = 0; i < nums1.length; i++) {
    ans.push(map[nums1[i]]);
  }
  return ans;
};
```
