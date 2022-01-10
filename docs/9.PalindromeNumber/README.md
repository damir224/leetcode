ссылка на задачу 

https://leetcode.com/problems/palindrome-number/


---

```js
var isPalindrome = function(x) {
  if (x < 0) return false
  return String(x).split('').reverse().join('') == x
};

```
---

if x less than zero and has zero in the end return false
```js
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  num = 0;
  while (x > num) {
    num = num * 10 + (x % 10);
    x = parseInt(x/10);
  }
  return x === num || x === parseInt(num/10);
};
```

