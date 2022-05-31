ссылка на задачу 

https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/

---

```js
const hasAllCodes = function(s, k) {
  let need = 1 << k;
  const obj = {}
  
  for(let i = k; i <= s.length; i++){
    const str = s.slice(i-k,i)
    
    if(!obj[str]) {
      obj[str] = str 
      need--
      if(need === 0){
        return true
      }
    }
  }
  return false
};
```
---

```js

```
