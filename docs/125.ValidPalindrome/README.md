ссылка на задачу 

https://leetcode.com/problems/valid-palindrome/

---

```js
const isPalindrome = function(s) {
  const oneWord = s.toLowerCase().replaceAll(/[^a-z0-9]/g, '')
  return oneWord === [...oneWord].reverse().join('')
};
```
---
