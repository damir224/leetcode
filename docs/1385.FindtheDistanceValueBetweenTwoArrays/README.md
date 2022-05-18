ссылка на задачу 

https://leetcode.com/problems/find-the-distance-value-between-two-arrays/


---
```js
const biSearch = (arr, leftT, rightT) => {
  let lo = 0, hi = arr.length-1;
  while(lo <= hi) {
    const mi = Math.floor((hi+lo)/2)
    if(arr[mi] >= leftT && arr[mi]<=rightT){
      return false
    }
    if (arr[mi] > rightT) {
      hi = mi-1
    }
    
    if (arr[mi] < leftT) {
      lo = mi+1
    }
    
  }
  return true
}
const findTheDistanceValue = function(arr1, arr2, d) {
  arr2.sort((a,b)=>a-b)
  let count = 0
  for(let i = 0; i < arr1.length; i++) {
    if(biSearch(arr2, arr1[i]-d, arr1[i]+d)){
      count++
    }
  }
  return count
};

```
---

```js

```
