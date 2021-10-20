ссылка на задачу 

https://leetcode.com/problems/linked-list-cycle/

дано целое число, output - это массив суммы едениц в данном числе

countBits(2) // [0, 1, 1]

0 --> 0

1 --> 1

2 --> 10


countBits(5) // [0, 1, 1, 2, 1, 2]

0 --> 0

1 --> 1

2 --> 10

3 --> 11

4 --> 100

5 --> 101


---

```ts
function countBits(n: number): number[] {
  const arr = []
  for (let i = 0; i <= n; i++) {
    arr.push(i.toString(2).split('').reduce((acc, cur) => {
      if (cur === '1') {
        acc = +acc + +cur
      }
      return acc
    }, 0))
  }
  return arr
};
```
---

```js
function countBits = function(num) {
  let res = [0]
  for(let i=1;i<=num;i++){
      res[i] = res[i>>1] + i%1
  }
  return res
};
```
---
