ссылка на задачу 

https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

---

```js
const longestSubarray = function (nums) {
  let windowStart = 0,
    windowEnd = 0,
    windowSum = 0,
    firstZeroIndex = -1;
  while (windowEnd < nums.length) {
    if (firstZeroIndex !== null && nums[windowEnd] === 0) {
      windowSum = Math.max(windowSum, windowEnd - windowStart);
      windowStart = firstZeroIndex;
      firstZeroIndex = windowEnd + 1;
    }
    if (firstZeroIndex === null && nums[windowEnd] === 0) {
      firstZeroIndex = windowEnd + 1;
    } 
    windowEnd++;
  }

  return Math.max(windowSum, windowEnd - windowStart) - 1;
};
```
---

```js
const longestSubarray = function (nums) {
  let windowStart = 0,
    windowEnd = 0,
    windowSum = 0,
    zeroSum = 0,
    firstZero = 0;
  while (windowEnd < nums.length) {
    if (zeroSum === 0 && nums[windowEnd] === 0) {
      firstZero = windowEnd + 1;
      zeroSum++;
    } else if (zeroSum === 1 && nums[windowEnd] === 0) {
      zeroSum++;
    }
    if (zeroSum === 2) {
      windowSum = Math.max(windowSum, windowEnd - windowStart);
      windowStart = firstZero;
      firstZero = windowEnd + 1;
      zeroSum--;
    }
    windowEnd++;
  }

  return Math.max(windowSum, windowEnd - windowStart) - 1;
};
```
---

```js
const longestSubarray = function (nums) {
  let start = 0,
    end = 0,
    count_zeros = 0,
    max_len = 0;

  while (end <= (nums.length - 1)) {
    if (nums[end] == 0) {
      count_zeros += 1;
    }
    while (count_zeros > 1) {
      if (nums[start] == 0) {
        count_zeros -= 1;
      }
      start += 1;

    }
    max_len = Math.max(max_len, end - start);
    end += 1;
  }
  return max_len;
};

```
