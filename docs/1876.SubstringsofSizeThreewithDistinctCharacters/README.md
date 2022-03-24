ссылка на задачу 

https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/


---
tc = O(n)
sc = O(1)
```js
var countGoodSubstrings = function(s) {
  let count = 0
  const arr = [...s]
  for (let i = 0; i < arr.length-2; i++) {
    if(arr[i] !== arr[i+1] && arr[i] !== arr[i+2] && arr[i+1] !== arr[i+2]) count += 1
  }
  return count
};
```
---
sliding window
tc = O(n)
sc = O(n)
```js
var countGoodSubstrings = function(s) {
  let count = 0
  const arr = [...s]
  const obj = {};
  let windowStart = 0
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    obj[arr[windowEnd]] = obj[arr[windowEnd]] + 1 || 1
    if (windowEnd - windowStart === 2) {
      if(Object.keys(obj).length === 3) {
        count++
      }
      if (obj[arr[windowStart]] === 1) {
        delete obj[arr[windowStart]]
      } else {
        obj[arr[windowStart]] = obj[arr[windowStart]] - 1
      }
      windowStart++
    }
  }
  return count
};

```
