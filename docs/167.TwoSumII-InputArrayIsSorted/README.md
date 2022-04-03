ссылка на задачу 

https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/


---
tc - O(n)

sc - O(1)
```js
const twoSum = function (numbers, target) {
  let min = 0, max = numbers.length-1;
  while(min < max) {
    const difference = target - (numbers[max] + numbers[min])
    if(difference === 0) {
      return [min+1, max+1]
    }
    if(difference > 0) {
      min++
    } else {
      max--
    }
  }
};
```
