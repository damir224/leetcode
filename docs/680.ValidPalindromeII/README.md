ссылка на задачу 

https://leetcode.com/problems/valid-palindrome-ii/

---
tc - O(n)

sc - O(1)

```js
const checkPalindrome = function (s, min = 0, max = s.length - 1) {
  while (min <= max) {
    if (s[min] !== s[max]) {
      return false;
    }
    min++;
    max--;
  }
  return true;
};

const validPalindrome = function (s) {
  let min = 0,
    max = s.length - 1;
  while (min <= max) {
    if (s[min] !== s[max]) {
      return checkPalindrome(s, min+1, max) || checkPalindrome(s, min, max-1)
    }
    min++;
    max--;
  }
  return true;
};

console.log('validPalindrome', validPalindrome('aba')); // true
console.log('validPalindrome', validPalindrome('abca')); // true
console.log('validPalindrome', validPalindrome('abc')); // false
console.log('validPalindrome', validPalindrome('deeee')); // true
console.log('validPalindrome', validPalindrome('eedede')); // true

```
---
