let twoSum1 = function (nums, target) {
  performance.mark('start');
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        performance.mark('end');
        return performance.measure('time', 'start', 'end').duration.toFixed(2);
        return [i, j];
      }
    }
  }
  performance.mark('end');
  return performance.measure('time', 'start', 'end').duration.toFixed(2);
  return null;
};
let twoSum = function (nums, target) {
  performance.mark('start');
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        performance.mark('end');
        return performance.measure('time', 'start', 'end').duration.toFixed(2);
        return [i, j];
      }
    }
  }
  performance.mark('end');
  return performance.measure('time', 'start', 'end').duration.toFixed(2);
  return null;
};

console.log(`twoSum([2, 7, 11, 15], 9)`, twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(`twoSum([3, 2, 4], 6)`, twoSum([3, 2, 4], 6)); // [1,2]
console.log(
  `twoSum([3, ... 15], 99)`,
  twoSum(
    [
      3, 3, 2, 7, 11, 15, 2, 7, 11, 15, 2, 7, 11, 15, 2, 7, 11, 15, 2, 7, 11,
      15,
    ],
    99
  )
); // [0,1]
