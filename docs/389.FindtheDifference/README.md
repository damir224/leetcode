ссылка на задачу 

https://leetcode.com/problems/find-the-difference/


---
```js
const findTheDifference = function(s, t) {
  const map = {}  
  for(let i = 0; i < s.length; i++){
      map[s[i]] = (map[s[i]]??0) + 1
  }
  for(let i = 0; i < t.length; i++){
    if(map[t[i]] > 0) {
      map[t[i]]--
    } else {
      return t[i]
    }
  }
};
```
---

