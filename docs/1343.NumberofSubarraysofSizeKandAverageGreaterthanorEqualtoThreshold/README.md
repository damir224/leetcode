ссылка на задачу 

https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/


---
sliding window
tc = O(n)
sc = O(1)
```js
var numOfSubarrays = function(arr, k, threshold) {
  let windowStart = 0
  let count = 0;
  let sum = 0
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd]
    if (windowEnd - windowStart === k-1) {
      const average = sum / k
      if (average >= threshold) count++
      sum -= arr[windowStart]
      windowStart++
    }
  }
  return count
};
```
