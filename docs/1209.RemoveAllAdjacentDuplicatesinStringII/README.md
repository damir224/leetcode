ссылка на задачу 

https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/


---
```js
const removeDuplicates = function(s, k) {
  const stack = []
  const sArr = [...s]
  for(let i = 0; i < sArr.length; i++) {
    const prevV = 
      stack.length > 0 
      && stack[stack.length-1].key === sArr[i]
        ? stack[stack.length-1].value 
        : 0;
    stack.push({key: sArr[i], value: prevV+1})
    if(stack[stack.length-1].value === k){
      for(let i = 0; i < k; i++) {
        stack.pop()
      }
    }
  }
  return stack.map(({key})=>key).join``
};
```
---

```js

```
