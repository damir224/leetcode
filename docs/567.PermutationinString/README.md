ссылка на задачу 

https://leetcode.com/problems/permutation-in-string/


---
```js
const getCharCode = (s) => s.charCodeAt() - 'a'.charCodeAt()
const isArrEqual = (a1, a2) => {
  for (let i = 0; i < a1.length-1; i++) {
    if(a1[i] !== a2[i]) return false
  }
  return true
}
const checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  const arr1 = new Array(26).fill(0)
  const arr2 = new Array(26).fill(0)
  
  for (let i = 0; i < s1.length; i++) {
    arr1[getCharCode(s1[i])]++
    arr2[getCharCode(s2[i])]++ 
  }
  if(isArrEqual(arr1, arr2)) {
    return true
  }

  let start = 0;
  let end = s1.length
  while(end < s2.length) {
    arr2[getCharCode(s2[start])]--
    arr2[getCharCode(s2[end])]++
    if(isArrEqual(arr1, arr2)) {
      return true
    }
    start++
    end++
  }
  return false;
};

```
