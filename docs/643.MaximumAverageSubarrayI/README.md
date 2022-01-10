ссылка на задачу 

https://leetcode.com/problems/maximum-average-subarray-i/


---

```js
var findMaxAverage = function(nums, k) {
  let sum = 0
  for(let i = 0; i < k; i++) {
    sum += nums[i]
  }
  let max = sum/k
  for(let j = k; j < nums.length; j++) {
    sum -= nums[j-k]
    sum += nums[j]
    max = Math.max(max, sum/k)
  }
  return max
};
```
---

Number.MIN_SAFE_INTEGER in JS is -(2^53 - 1)
```js
var findMaxAverage = function (nums, k) {
  let sum = 0,
    max = Number.MIN_SAFE_INTEGER,
    count = 0;
  for (let end = 0; end < nums.length; end++) {
    count++;
    sum += nums[end];
    if (end >= k - 1) {
      max = Math.max(max, sum);
      sum -= nums[end - (k - 1)];
    }
  }
  return max / k;
};
```
