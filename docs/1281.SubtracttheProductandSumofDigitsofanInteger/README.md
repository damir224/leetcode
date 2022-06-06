ссылка на задачу 

https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/


---
```js
const subtractProductAndSum = function(n) {
  const nS = n.toString()
  let sum = 0, comp = 1;
  for(let i =0; i < nS.length; i++){
    sum += +nS[i]
    comp *= +nS[i]
  }
  return comp - sum
};
```
---

```js

```
