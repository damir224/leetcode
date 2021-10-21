ссылка на задачу 

https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/


---

```js
var maxDepth = function(s) {
  let depth = 0
  let count = 0
  s.split('').forEach(e => {
    if (e === '(') {
      count ++
      if (count > depth) {
        depth = count
      }
    } 
    if (e === ')') {
      count --
    }
  })
  return depth
};

console.log(`maxDepth("(1+(2*3)+((8)/4))+1")`, maxDepth("(1+(2*3)+((8)/4))+1")) // 3
console.log(`maxDepth("(1)+((2))+(((3)))")`, maxDepth("(1)+((2))+(((3)))")) // 3
console.log(`maxDepth("1+(2*3)/(2-1)")`, maxDepth("1+(2*3)/(2-1)")) // 1
console.log(`maxDepth("1")`, maxDepth("1")) // 0
```
---

```js
var maxDepth = function(s) {
  const stack = []
  let count = 0
  s.split('').forEach(e => {
    if (e === '(') {
      stack.push(e)
      if (count < stack.length) {
         count = stack.length
      }
    } 
    if (e === ')') {
      stack.pop()
    }
  })
  return count
};

```
---
```js
var maxDepth = function(s) {
  const stack = [];
  let depth = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push('(')
    } else if (s[i] === ')') {
      depth = Math.max(depth, stack.length)
      stack.pop()
    }
  }

  return depth
};
```
---
