ссылка на задачу 

https://leetcode.com/problems/happy-number/


---

```js
const isHappy = function(n) {
  const map = {}
  let newN = n;
  while(newN !== 1) {
    if(map[newN]) {
      return false
    } else {
     const curN = newN.toString().split('').reduce((acc,cur)=>acc + cur*cur,0)
    map[newN] = curN
    newN = curN 
    }
  }
    return true
};
```
---

```js

```
---
