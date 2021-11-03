ссылка на задачу 

https://leetcode.com/problems/squares-of-a-sorted-array/


---
```js
var sortedSquares = function(nums) {
    return nums.map(e=>Math.pow(e,2)).sort((a,b)=>a-b)
};
```
---

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let l = 0,
    r = nums.length - 1,
    arr = new Array(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[l]) < Math.abs(nums[r])) {
      arr[i] = nums[r] ** 2;
      r--;
    } else {
      arr[i] = nums[l] ** 2;
      l++;
    }
  }
  return arr;
};

console.log(`sortedSquares([-4,-1,0,3,10])`, sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(`sortedSquares([-7,-3,2,3,11])`, sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]

```
---
```js

```
---
