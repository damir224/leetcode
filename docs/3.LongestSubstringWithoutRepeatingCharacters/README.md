ссылка на задачу 

https://leetcode.com/problems/longest-substring-without-repeating-characters/

---
tc - O(n)

sc - O(1)
```js
const lengthOfLongestSubstring = function(s) {
    const hash = {};
    let start = 0, length = 0;
    for(let end = 0; end < s.length; end++) {
      hash[s[end]] = (hash[s[end]] ?? 0) + 1
      while(hash[s[end]] !== 1) {
        hash[s[start]] -= 1  
        start++
      } 
      length = Math.max(length, end-start+1)
    }
    return length
};
```
---

```js

```
