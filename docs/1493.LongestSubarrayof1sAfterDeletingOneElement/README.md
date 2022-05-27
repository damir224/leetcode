ссылка на задачу 

https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

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
