ссылка на задачу 

https://leetcode.com/problems/power-of-two/


---
```js
var isPowerOfTwo = function (n) {
  let i = 1;
  while (i < n) {
      i *= 2;
  }
  return i == n;
};
```
---

```js
var isPowerOfTwo = function (n) {
  if(n <= 0) {return false}
  if(n === 1) {return true}
  if( n % 1 !== 0 ) {return false}
  if(n===2) {return true}
  return isPowerOfTwo((n/2))
};
```
---
```js
var isPowerOfTwo = function (n) {
  return n > 0 && !(n & (n - 1));
};
// 0000
// 0001
// 0010 // 2 & 1 = 0000
// 0011
// 0100 // 4 & 3 = 0000
// 0101
// 0110
// 0111
// 1000 // 8 & 7 = 0000
// 1001
// 1001
```
---
