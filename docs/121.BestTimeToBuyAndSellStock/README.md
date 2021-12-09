ссылка на задачу 

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

дан массив целых чисел, найти наибольшую разницу между числами

maxProfit([7,1,5,3,6,4]) // 5

maxProfit([7,6,4,3,1]) // 0

maxProfit([2, 1, 4]) // 3

maxProfit([2,4,1]) // 2
---

```ts
function maxProfit(prices: number[]): number {
  let max_profit = 0
  let min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    max_profit = Math.max(max_profit, prices[i] - min)
    min = Math.min(min, prices[i])
  }
  return max_profit
};
```
