ссылка на задачу 

https://leetcode.com/problems/summary-ranges/


---
```js
const summaryRanges = function (nums) {
  const result = [];

  for (let end = 1, start = 0; end <= nums.length; end++) {
    if (nums[end] !== nums[end - 1] + 1) {
      const pushValue =
        nums[start] === nums[end - 1]
          ? `${nums[end - 1]}`
          : `${nums[start]}->${nums[end - 1]}`;
      result.push(pushValue);
      start = end;
    }
  }
  return result;
};

```
---
