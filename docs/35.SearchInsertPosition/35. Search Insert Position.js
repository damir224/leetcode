const searchInsert = function (nums, target) {
  let min = 0,
    max = nums.length - 1,
    num = 0,
    mid = 0;
  while (min <= max) {
    num = mid;
    mid = Math.floor(min + (max - min) / 2);
  
    if (nums[mid] === target) {
      return mid;
    }
  
    if (nums[mid] < target) {
      min = mid;
    } else {
      max = mid;
    }

    if (num === mid) {
      if (nums[mid + 1] < target) {
        mid += 2;
      } else {
        mid += 1;
      }
      if (nums[mid - 1] > target) {
        mid -= 1;
      }
      
      return mid;
    }
  }
  return 0;
};
console.log('searchInsert([1,3,5,6], 5)', searchInsert([1, 3, 5, 6], 5)); // 2
console.log('searchInsert([1,3,5,6], 2)', searchInsert([1, 3, 5, 6], 2)); // 1
console.log('searchInsert([1,3,5,6], 7)', searchInsert([1, 3, 5, 6], 7)); // 4
console.log('searchInsert([1,3,5,6], 0)', searchInsert([1, 3, 5, 6], 0)); // 0
console.log('searchInsert([1,3,5,6], 0)', searchInsert([-4, 1, 3, 5, 6], 0)); // 1
console.log('searchInsert([1], 2)', searchInsert([1], 2)); // 1
