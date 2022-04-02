ссылка на задачу 

https://leetcode.com/problems/rotate-array/


---

```js
const reverse = (nums, min=0, max=nums.length-1) => {
  let temp;
  while(min < max) {
    temp = nums[max]
    nums[max] = nums[min]
    nums[min] = temp
    min++
    max--
  }
  return nums
}

const rotate = function(nums, k) {
  k = k % nums.length;
  reverse(nums)
  reverse(nums, 0, k-1)
  reverse(nums, k)
  return nums
};
```
---

```js

```
---
