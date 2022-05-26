ссылка на задачу 

https://leetcode.com/problems/valid-anagram/


---
```js
const isAnagram = function(s, t) {
  const objS = {}
  s.split('').forEach(el=>objS[el]=(objS[el] ?? 0) + 1)
  for(let letter of t) {
    if(!objS[letter]) {
      return false
    } else {
      objS[letter]--
    }
  }
  return Object.values(objS).every(el=>el===0)
};
```
---
