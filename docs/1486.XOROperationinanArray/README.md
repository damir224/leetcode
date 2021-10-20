ссылка на задачу 

https://leetcode.com/problems/xor-operation-in-an-array/

---

```js
var xorOperation = function(n, start) {
    const arr = [start]
    for(let i = 1; arr.length<n; i++){
        arr.push(start + 2*i)
    }
    let result = arr[0]
    for(let i = 1; i<arr.length; i++){
        result = result ^ arr[i]
    }
    return result
};
```
---

```js
var xorOperation = function(n, start) {
  let result = start
  for(let i = 1; i<n; i++){
     result = result ^ (start + 2*i)
  }
  return result
};
```
---
```js
const xorOperation = (n, start) => {
  let a = start
  for(let i =1; i <n ; i++){
    a = a ^(start+=2)
  }
  return a 
};
```
---
```js
var xorOperation = (n, start) => {
  return Array(n-1)
    .fill()
    .reduce((acc, cur) => {
      acc = acc ^ (start+=2)
      return acc
    }, start);
};
```
---
