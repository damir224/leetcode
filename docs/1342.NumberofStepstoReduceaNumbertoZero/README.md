ссылка на задачу 

https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/


---

```js
var numberOfSteps = function(num) {
  let count = 0
  while (num > 0) {
    if(num & 1) {
      num = num - 1
      count++
    } else {
      num = num >> 1
      count++
    }
  }
  return count
};
console.log(`numberOfSteps(14)`, numberOfSteps(14)) // 6
console.log(`numberOfSteps(8)`, numberOfSteps(8)) // 4
console.log(`numberOfSteps(123)`, numberOfSteps(123)) // 12
```
---

```js
var numberOfSteps = function(num) {
  let count = 0
  while (num > 0) {
    (num & 1) ? num = num - 1 : num = num >> 1;
    count++
  }
  return count
};
```
---
```js

```
---
```js

```
---
