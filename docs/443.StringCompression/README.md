ссылка на задачу 

https://leetcode.com/problems/string-compression/


---
```js
const  compress = function(chars) {
  const obj = {}
  let curChar = chars[0];
  let index = 0
  for (let letter = 0; letter <= chars.length; letter++) {
    const currentLetter = chars[letter]
    obj[currentLetter] = (obj[currentLetter] ?? 0) + 1

    if(currentLetter !== curChar) {
      chars[index++] = curChar

      if(obj[curChar] !== 1) {
        
        if(obj[curChar] >= 10) {
          let num = obj[curChar].toString().split('').reverse()
          while(num.length) {
            chars[index++] = num.pop()
          }
        } else {
          chars[index++] = obj[curChar].toString()
        }
        
      }

      delete obj[curChar]
      curChar = currentLetter
    }
  }
  return index
};

```
---

