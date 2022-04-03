ссылка на задачу 

https://leetcode.com/problems/move-zeroes/


---
```js
const moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[j++] = nums[i];
    }
  }
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums
};
```
---

```js
const moveZeroes = function(nums) {
  let temp;
  for(let i = 0, nonZeroIndex= 0; i < nums.length; i++) {
    if(nums[i] !== 0){
      temp = nums[nonZeroIndex]
      nums[nonZeroIndex] = nums[i]
      nums[i] = temp
      nonZeroIndex++
    } 
  }
  return nums
};
```
