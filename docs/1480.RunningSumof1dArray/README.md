ссылка на задачу 

https://leetcode.com/problems/xor-operation-in-an-array/

---

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0
    return nums.map(el=>{
      sum += el
      return sum
    })
};
```
---
