ссылка на задачу 

https://leetcode.com/problems/sign-of-the-product-of-an-array/


---

```js
const arraySign = function(nums) {
  let result = 1  
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === 0 ){
      return 0
    }
    result *= nums[i]
  }
  if(result > 0) {
    return 1
  }
  if(result < 0) {
      return -1
  }
  return 0
};
```
---
