ссылка на задачу 

https://leetcode.com/problems/check-if-n-and-its-double-exist/


---
```js
const checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const multi = arr[i] * 2;
    if (hash[multi] !== undefined || hash[arr[i] / 2] !== undefined) {
      return true;
    }
    if (hash[arr[i]] === undefined) {
      hash[arr[i]] = multi;
    }
  }
  return false;
};
```
---

```js

```
