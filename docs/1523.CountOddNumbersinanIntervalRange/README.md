ссылка на задачу 

https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

---

```js
const countOdds = function(low, high) {
  let count = 0;  
  const initNumber = (low%2 !== 0) ? low :low+1
  for (let i = initNumber; i <= high; i+=2){
      count++
    }
  return count;
};
```
---
