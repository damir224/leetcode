ссылка на задачу 

https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

---

```js
const bs = (arr, lo = 0, hi = arr.length-1) => {
  while(lo <= hi) {
    const mi = lo + Math.floor((hi-lo)/2)
    if(arr[mi] >= 0) {
      lo = mi + 1
    }
    
    if(arr[mi] < 0) {
      hi = mi - 1
    }
  }
  return  arr.length - lo
}
const countNegatives = function(grid) {
    return grid.reduce((acc,cur, i)=> {
      const countNeg = bs(cur)
      if(countNeg) {
        acc+=countNeg
      }
      return acc
    }, 0)
};


```
---
