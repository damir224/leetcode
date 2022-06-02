ссылка на задачу 

https://leetcode.com/problems/transpose-matrix/


---

```js
const var transpose = m => m[0].map((_, i) => m.map(r => r[i]));
```

---

```js
var transpose = m => {
  const rL = m.length
  const cL = m[0].length
  
  const res = new Array(cL).fill(null).map(el=> [])
  
  for(let r = 0; r < rL; ++r ) {
    for(let c = 0; c < cL; ++c ) {
      res[c][r] = m[r][c]
    }
  }
  
  return res
}
```
