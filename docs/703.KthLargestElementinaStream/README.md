ссылка на задачу 

https://leetcode.com/problems/kth-largest-element-in-a-stream/


---
```js

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k, this.nums = nums
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.nums.push(val)
  return this.nums.sort((a,b)=>a-b)[this.nums.length-this.k]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
```
