const search = function (nums, target) {
  let min = 0,
    max = nums.length - 1;

  while (min < max) {
    let mid = min+ Math.floor((max) / 2)
    if (nums[mid] > target) {
      max = mid;
    } else if (nums[mid] === target) {
      return min;
    } else {
      return (mid = min);
    }
  }
  return -1;
};
//   if (!nums) {
//     return -1;
//   }
//   if (nums[nums.length - 1] < target) {
//     return -1;
//   }

//   let mid = Math.floor(max / 2);
//   console.log(`min`, min);
//   console.log(`max`, max);
//   console.log(`mid`, mid);

//   if (nums[mid] > target) {
//     return search(nums.slice(min, mid), target, min, (max = mid));
//   } else if (nums[mid] === target) {
//     return mid;
//   } else {
//     return search(nums.slice(mid, max), target, (min = mid), max);
//   }
// };

console.log(`search([-1, 0, 3, 5, 9, 12], 9)`, search([-1, 0, 3, 5, 9, 12], 9)); // 4
// console.log(`search([-1, 0, 3, 5, 9, 12], 2)`, search([-1, 0, 3, 5, 9, 12], 2)); // -1
