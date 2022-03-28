ссылка на задачу 

https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/


---
sliding window
<br />
tc = O(n)
<br />
sc = O(1)

```js
const minimumDifference = function(nums, k) {
  const arr = [...nums.sort((a,b)=>a-b)]
  let res = arr[arr.length-1], windowStart = 0, windowEnd = 0;
  while(windowEnd < arr.length) {
    if (windowEnd - windowStart === k - 1) {
      res = Math.min(arr[windowEnd] - arr[windowStart], res)
      windowStart++
    }
    windowEnd++
  }
  return res
};
```
---
sliding window
<br />
tc = O(n)
<br />
sc = O(1)

```js
const minimumDifference = function(nums, k) {
  const arr = [...nums.sort((a,b)=> a-b)]
  const l = arr.length
  let res = arr[l-1];
  for (let index = 0; index <= l-k; index++) {
    res = Math.min(arr[index+k-1] - arr[index], res)
  }
  return res
};
```
