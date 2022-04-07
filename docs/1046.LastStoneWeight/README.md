ссылка на задачу 

https://leetcode.com/problems/last-stone-weight/


---
```js
const lastStoneWeight = function(stones) {
  if(stones.length === 0) return 0
  stones.sort((a,b)=>a-b)
  while(stones.length > 1) {
    const length = stones.length
    const x = stones[length-2]
    const y = stones[length-1]
    if(x === y) {
      stones.pop()
      stones.pop()
    } else {
      const res = y - x
      stones[length-2] = res
      stones.pop()
      stones.sort((a,b)=>a-b)
    }
  }
  return stones[0] ? stones[0] : 0
};
```
