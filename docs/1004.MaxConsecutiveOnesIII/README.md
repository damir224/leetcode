ссылка на задачу 

https://leetcode.com/problems/max-consecutive-ones-iii/


---
sliding window
<br/>
tc = O(n)
<br/>
sc = O(1)

```js
var longestOnes = function (nums, k) {
  let windowStart = 0,
    windowEnd = 0,
    kCount = 0;
  while (windowEnd < nums.length) {
    if (nums[windowEnd] === 0) {
      kCount++;
    }
    if (kCount > k) {
      if (nums[windowStart] === 0) {
        kCount--;
      }
      windowStart++;
    }
    windowEnd++;
  }
  return windowEnd - windowStart;
};
```
---
sliding window
<br/>
tc = O(n)
<br/>
sc = O(1)

```js
var longestOnes = function(nums, k) {
  let maxLength = 0, windowStart = 0, flipCount = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    if(nums[windowEnd] === 0) {
      flipCount++
    }
    if(flipCount > k) {
      if(nums[windowStart] === 0) {
        flipCount--
      }
      windowStart++
    }
    
    if(flipCount <= k) {
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
  }
  return maxLength
};
```
