ссылка на задачу 

https://leetcode.com/problems/find-the-duplicate-number/


---
tc - O(n)
<br />
sc - O(1)

```js
const findDuplicate = function(nums) {
  const obj = {};
  let res;
  for(let i = 0; i < nums.length; i++){
    obj[nums[i]] = (obj[nums[i]] || 1) + 1
    if (obj[nums[i]] > 2) {
      res = nums[i]
      break;
    } 
  }
  return res
};
```
---
tc - O(n)
<br />
sc - O(1)

```js
const findDuplicate = function(nums) {
  const arr = [...nums]
  let num = 0;
  while(true){
    const a = arr[num]
    if(a<0) {
      return num
    }
    arr[num] = -arr[num]
    num = a
  }
};

```
