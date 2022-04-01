ссылка на задачу 

https://leetcode.com/problems/search-insert-position/

---
tc - O(log(n))

sc - O(n*k)
```js
const searchInsert = function (nums, target) {
  let min = 0,
    max = nums.length - 1,
    num = 0,
    mid = 0;

  while (min <= max) {
    num = mid;
    mid = Math.floor(min + (max - min) / 2);
  
    if (nums[mid] === target) {
      return mid;
    }
  
    if (nums[mid] < target) {
      min = mid;
    } else {
      max = mid;
    }

    if (num === mid) {
      if (nums[mid + 1] < target) {
        mid += 2;
      } else {
        mid += 1;
      }
      if (nums[mid - 1] > target) {
        mid -= 1;
      }
      
      return mid;
    }
  }
  return 0;
};
```

