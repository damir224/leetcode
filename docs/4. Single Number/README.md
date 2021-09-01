ссылка на задачу 

https://leetcode.com/problems/single-number/

дан не пустой массив целых чисел, все элементы повторяются дважды кроме одного, найти не повторяющиайся элемент

[2,2,1] // 1
[4,1,2,1,2] // 4
[1] // 1
---

```ts
const singleNumber = (numbers: number[]): number => +Object.entries(numbers.reduce((acc, number) =>{
  acc[String(number)] = ++acc[String(number)] || 1
  return acc
}, {})).filter(el => el[1] === 1)[0][0]
```
---

```ts
const singleNumber = (nums: number[]): number => (nums.reduce((acc, cur)=> acc ^= cur, 0))
```
---
