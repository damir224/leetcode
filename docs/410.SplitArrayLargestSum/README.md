ссылка на задачу 

https://leetcode.com/problems/first-unique-character-in-a-string/


---
hashmap
```js
var firstUniqChar = function (s) {
  const dict = {};
  for (const i of s) {
    dict[i] = (dict[i] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

console.log(`firstUniqChar("leetcode")`, firstUniqChar('leetcode')); // 0
console.log(`firstUniqChar("loveleetcode")`, firstUniqChar('loveleetcode')); // 2
console.log(`firstUniqChar("aabb")`, firstUniqChar('aabb')); // -1
```
---

```js
var firstUniqChar = function (s) {
  const map = new Map();
  
  for (let i = 0; i < s.length; i++) {
    map.has(s[i]) ? map.set(s[i], 2) : map.set(s[i], 1)
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};
```
---
```js
var firstUniqChar = function (s) {
  const arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const letterIndex = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    arr[letterIndex]++;
  }
  for (let i = 0; i < s.length; i++) {
    const letterIndex = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    if (arr[letterIndex] === 1) {
      return i;
    }
  }
  return -1;
};
```
---
