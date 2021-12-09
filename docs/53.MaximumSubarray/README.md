ссылка на задачу 

https://leetcode.com/problems/maximum-subarray/

дан массив целых чисел, найти, числа(по порядку), сумма которых будет максимальной

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) // 6

maxSubArray([1]) // 1

maxSubArray([5,4,-1,7,8]) // 23

---

```ts
function maxSubArray(nums) {
  let curSum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curSum += nums[i]
    if(curSum < nums[i]) {
      curSum = nums[i]
    }
    if(maxSum < curSum) {
      maxSum = curSum
    }
  }
  return maxSum;
}
```
---

```ts
function maxSubArray(nums) {
  let curSum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(nums[i], curSum + nums[i])
    maxSum = Math.max(maxSum, curSum)
  }
  return maxSum;
}
```
