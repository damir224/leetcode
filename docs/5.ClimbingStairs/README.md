ссылка на задачу 

https://leetcode.com/problems/climbing-stairs/

дан не пустой массив целых чисел, все элементы повторяются дважды кроме одного, найти не повторяющиайся элемент

findDisappearedNumbers(2) // 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

findDisappearedNumbers(3) // 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

[1] // 1
---

doesn't work at leetcode:
```ts
function climbStairs(n: number): number {
  if (n === 2) return 2
  if (n === 3) return 3
  return climbStairs(n-1) + climbStairs(n-2)
};
```

(80ms, 40mb):
---
```ts
function climbStairs(n: number): number {
  if (n === 1) {
    return 1
  }
  let prev = 1;
  let cur = 2
  for(let i = 3; i <= n; i++) {
    let next = prev + cur
    prev = cur;
    cur = next;
  }
  return cur
};
```

slower(120ms, 39mb):
---
```ts
function climbStairs(n: number): number {
  const arr = [1,2]
  for(let i = 2; i<n;i++){

    arr[i] = arr[i-1] + arr[i-2]
  }
  return arr[n-1]
};
```
---

