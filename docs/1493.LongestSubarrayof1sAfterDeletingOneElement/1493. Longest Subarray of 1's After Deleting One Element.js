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

// const longestSubarray = function (nums) {
//   let start = 0;
//   (end = 0), (res = 0), (count = 1), (endPrev = 0);
//   for (end; end < nums.length; end++) {
//     if (nums[end] === 1) {
//       break;
//     }
//   }
//   endPrev = start = end;
//   for (end; end < nums.length; end++) {
//     res = Math.max(res, end - start);
//     if (nums[end] === 0 && nums[end+1] !== 0) {
//       if (count === 0) {
//         start = endPrev+1;
//         count = 1;
//       } else if (count === 1) {
//         start++;
//         endPrev = end + 1;
//         count--;
//       }
//     } else  if (nums[end] === 0 && nums[end+1] === 0){
//       res = Math.max(res, end - start);
//       endPrev = start = end+1;
//       count = 1
//     }
//   }
//   res = Math.max(res, end - start);
//   return nums.length === res ? res - 1 : res;
// };

// console.log('answer is 3', longestSubarray([1, 1, 0, 1])); // 3
// console.log('answer is 5', longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1, 0])); // 5
console.log('answer is 2', longestSubarray([1, 1, 1])); // 2
console.log('answer is 4', longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1])); // 4
// console.log('answer is 2', longestSubarray([0, 0, 1, 1])); // 2
// console.log('answer is 18',longestSubarray([1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,])); // 18
