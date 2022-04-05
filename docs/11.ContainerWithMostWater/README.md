ссылка на задачу 

https://leetcode.com/problems/container-with-most-water/


---
tc - O(n)

sc - O(1)

```js
const maxArea = function(height) {
  let length = height.length-1, left = 0, right = length, sum = 0;
  while(left<=right) {
    sum = Math.max(sum, Math.min(height[left], height[right]) * length)
    if(height[left] < height[right]) {
      left++ 
    } else {
      right--      
    }
    length--
  }
  return sum
};
```
---
