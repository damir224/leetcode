ссылка на задачу 

https://leetcode.com/problems/detect-capital/


---
```js
const detectCapitalUse = function(word) {
  let count = 0
    const arr = word.split('')
    arr.forEach(e=> e.charCodeAt() <= 'Z'.charCodeAt() && count++  )
  if(arr.length === count) return true
  if(count === 1 && arr[0].charCodeAt() <= 'Z'.charCodeAt()) return true
  if(count === 0) return true
  return false 
};

```
---
```js
const detectCapitalUse = (word) => word.toUpperCase() === word || word[0] + word.slice(1).toLowerCase() === word

```
