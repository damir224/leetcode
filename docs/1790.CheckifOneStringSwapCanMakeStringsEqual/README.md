ссылка на задачу 

https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/


---

```js
const areAlmostEqual = function(s1, s2) {
  if(s1 === s2){
    return true
  }
  
  let firstIndex = null;
  for(let i = 0; i < s1.length; i++) {
    if(s1[i] !== s2[i] && firstIndex !== null) {
      const arr2 = s2.split('')
      const temp = arr2[firstIndex]
      arr2[firstIndex] = arr2[i]
      arr2[i] = temp
      return s1 === arr2.join('')
    }
    if(s1[i] !== s2[i] && firstIndex === null) {
      firstIndex = i
    }
  }
  return false
};
```
---
```js
const areAlmostEqual = function(s1, s2) {
  if(s1 === s2){
    return true
  }
  const arr = []
  for(let i=0; i < s1.length; i++) {
    if(s1[i] !== s2[i]) {
      arr.push(i)
    }
  }
  if(arr.length ===2) {
    const arr2 = s2.split('')
    const temp = arr2[arr[0]]
    arr2[arr[0]] = arr2[arr[1]]
    arr2[arr[1]] = temp
    return s1 === arr2.join('')
  }

  return false
};
```
---
