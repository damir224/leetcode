ссылка на задачу 

https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/


---

```js
const specialArray = function(nums) {
  for(let i = 0; i <= nums.length; i++) {
    let s = 0
    for(let k = 0; k < nums.length; k++) {
      if(i <= nums[k]) {
         s++
      }
    }
    if(i === s) {
      return s
    }
  }
  return -1
};

```
---
