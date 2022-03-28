ссылка на задачу 

https://leetcode.com/problems/determine-color-of-a-chessboard-square/


---
```js
const squareIsWhite = function (coordinates) {
  const s1 = coordinates[0].charCodeAt(0) % 2;
  const s2 = coordinates[1].charCodeAt(0) % 2;
  if ((s1 === 0 && s2 !== 0) || (s1 !== 0 && s2 === 0)) {
    return true;
  }
  return false;
};
```
