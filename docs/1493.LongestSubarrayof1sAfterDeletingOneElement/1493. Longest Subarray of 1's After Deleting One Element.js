const longestSubarray = function (nums) {
  let firstZero = null,
    windowEnd = 0,
    windowSum = 0;
  while (windowEnd < nums.length) {
    if (nums[windowEnd] === 0 &&  firstZero !== null) {
      
      windowSum = Math.max(windowSum, windowEnd - windowStart);
      windowStart = windowEnd + 1;
    }

    if(nums[windowEnd] === 0 && firstZero === null) {
      firstZero = windowEnd;
    }
    windowEnd++;
  }
  return Math.max(windowSum, windowEnd - windowStart);
};

console.log('3 === ', longestSubarray([1, 1, 0, 1])); // 3
console.log('5 === ', longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])); // 5
console.log('2 === ', longestSubarray([1, 1, 1])); // 2
console.log('4 === ', longestSubarray([1,1,0,1,0,1,1,1,0,1])); // 4

// const longestSubarray = function (nums) {
//   let windowStart = 0,
//     windowEnd = 0,
//     windowSum = 0;
//   while (windowEnd < nums.length) {
//     if (nums[windowEnd] === 0) {
//       windowSum = Math.max(windowSum, windowEnd - windowStart);
//       windowStart = windowEnd + 1;
//     }
//     windowEnd++;
//   }
//   return Math.max(windowSum, windowEnd - windowStart);
// };
