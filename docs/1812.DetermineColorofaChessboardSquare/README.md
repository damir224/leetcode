ссылка на задачу 

https://leetcode.com/problems/determine-color-of-a-chessboard-square/


---
```js
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const s1 = coordinates[0].charCodeAt(0) % 2;
  const s2 = coordinates[1].charCodeAt(0) % 2;
  if ((s1 === 0 && s2 !== 0) || (s1 !== 0 && s2 === 0)) {
    return true;
  }
  return false;
};

console.log(`squareIsWhite('a1')`, squareIsWhite('a1')); // false
console.log(`squareIsWhite('c7')`, squareIsWhite('c7')); // false
console.log(`squareIsWhite('h8')`, squareIsWhite('h8')); // false
console.log(`squareIsWhite('h3')`, squareIsWhite('h3')); // true
console.log(`squareIsWhite('c2')`, squareIsWhite('c2')); // true
console.log(`squareIsWhite('h3')`, squareIsWhite('h3')); // true
```
---

```js


```
