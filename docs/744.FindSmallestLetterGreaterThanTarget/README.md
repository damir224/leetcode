ссылка на задачу 

https://leetcode.com/problems/find-smallest-letter-greater-than-target/


---

```js
const nextGreatestLetter = function (letters, target) {
  let lo = 0,
    hi = letters.length;
  while (lo < hi) {
    const mi = lo + Math.floor((hi - lo) / 2);
    if (target < letters[mi]) {
      hi = mi;
    }
    if (target >= letters[mi]) {
      lo = mi + 1;
    }
  }
  return letters[lo % letters.length];
};

```
