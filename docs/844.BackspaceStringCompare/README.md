ссылка на задачу 

https://leetcode.com/problems/backspace-string-compare/


---

```js
const build = (arr) => {
  let skip = 0
  return arr.reduce((acc,cur) => {
    if(cur === '#') {
      skip++
    } else if (skip) {
      skip--
    } else {
      acc += cur
    }
    return acc
  },'')
}
const reverseArr = (str) => str.split('').reverse()
const backspaceCompare = (s, t) => build(reverseArr(s)) === build(reverseArr(t))

```
