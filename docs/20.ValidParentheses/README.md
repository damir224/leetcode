ссылка на задачу 

https://leetcode.com/problems/valid-parentheses/


---

```js
const isValid = function(s) {
  const arr = []
  const dict = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  
  if(!dict[s[0]] || s.length % 2 !== 0) {
    return false
  };
  
  for(let i = 0; i < s.length; i ++){
    if(dict[s[i]]) {
      arr.push(s[i])
    } else if(dict[arr.pop()] !== s[i] ) {
      return false
    }
  }
  
  return !arr.length
};
```

