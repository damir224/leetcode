const search = function (nums, target) {
  let min = 0,
    max = nums.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      max = mid + 1;
    } else {
      min = mid - 1;
    }
  }

  return -1;
};


// console.log(`search([-1, 0, 3, 5, 9, 12], 9)`, search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(`search([-1, 0, 3, 5, 9, 12], 2)`, search([-1, 0, 3, 5, 9, 12], 2)); // -1
