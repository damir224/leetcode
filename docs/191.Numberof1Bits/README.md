ссылка на задачу 

https://leetcode.com/problems/number-of-1-bits/


---

```js
const hammingWeight = function (n) {
  let count = 0;
  while (n !== 0) {
    // get the last bit in n
    const bit = 1 & n;
    // if bit === 1, then add count
    bit && count++;
    // move all bits to one bit right (0010 => 0001)
    n = n >>> 1;
  }
  return count;
};

```
---

```js

```
---
