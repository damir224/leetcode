ссылка на задачу 

https://leetcode.com/problems/reverse-string/


---
tc - O(n)

sc- O(1)

```js
var reverseString = function(s) {
  let min = 0, max=s.length-1;
  while(min<=max) {
    [s[min], s[max]] = [s[max], s[min]]
    min++
    max--
  }
  return s
};
```
---
