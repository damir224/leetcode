const longestSubarray = function (nums) {
  let windowStart = 0,
    windowEnd = 0,
    zeroCount = 2;
  while (windowEnd < nums.length) {
    if (nums[windowEnd] === 0) {
      zeroCount--;
    }
    if (zeroCount === 0) {
      if (nums[windowStart] === 0) {
        zeroCount++;
      }
      windowStart++;
    }
    windowEnd++;
  }
  return windowEnd - windowStart - 1;
};

// [
//   1, // windowStart=0 ; windowEnd=1 ; zeroCount=2
//   1, // windowStart=0 ; windowEnd=2 ; zeroCount=2
//   0, // windowStart=0 ; windowEnd=3 ; zeroCount=1
//   0, // windowStart=1 ; windowEnd=4 ; zeroCount=0
//   1, // windowStart=2 ; windowEnd=5 ; zeroCount=0
//   1, // windowStart=3 ; windowEnd=6 ; zeroCount=1
//   1, // windowStart=3 ; windowEnd=7 ; zeroCount=1
//   0, // windowStart=4 ; windowEnd=8 ; zeroCount=1
//   1, // windowStart=4 ; windowEnd=9 ; zeroCount=1
// ]

console.log('3 === ', longestSubarray([1, 1, 0, 1])); // 3
console.log('5 === ', longestSubarray([1, 1, 1, 0, 1, 1, 0, 1])); // 5
console.log('2 === ', longestSubarray([1, 1, 1])); // 2
console.log('4 === ', longestSubarray([1,1,0,1,0,1,1,1,0,1])); // 4
console.log('4 === ', longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1])); // 4

// const longestSubarray = function (nums) {
//   let firstZero = null,
//     windowEnd = 0,
//     windowSum = 0;
//   while (windowEnd < nums.length) {
//     if (nums[windowEnd] === 0 &&  firstZero !== null) {

//       windowSum = Math.max(windowSum, windowEnd - windowStart);
//       windowStart = windowEnd + 1;
//     }

//     if(nums[windowEnd] === 0 && firstZero === null) {
//       firstZero = windowEnd;
//     }
//     windowEnd++;
//   }
//   return Math.max(windowSum, windowEnd - windowStart);
// };

// console.log('3 === ', longestSubarray([1, 1, 0, 1])); // 3
// console.log('5 === ', longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])); // 5
// console.log('2 === ', longestSubarray([1, 1, 1])); // 2
// console.log('4 === ', longestSubarray([1,1,0,1,0,1,1,1,0,1])); // 4

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
