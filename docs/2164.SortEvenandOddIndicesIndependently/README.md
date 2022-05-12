ссылка на задачу 

https://leetcode.com/problems/sort-even-and-odd-indices-independently/

```js
const sortEvenOdd = function(nums) {
  const odd = []
  const even = []
  
  for(let i = 0; i < nums.length; i++){
    if(i % 2 === 0) {
      odd.push(nums[i])
    }else {
      even.push(nums[i])
    }
  }
  
  const oddSort = odd.sort((a,b)=> b-a)
  const evenSort = even.sort()
  const result = []
  
  for(let i = 0; i < nums.length; i++){
    if(i % 2 === 0) {
      result[i] = oddSort.pop()
    }else {
      result[i] = evenSort.pop()
    }
  }
  return result
};
```
