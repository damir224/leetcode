const nextPermutation = (nums)=> {
  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
      i--;
  }
  if (i >= 0) {
      let j = nums.length - 1;
      while (nums[j] <= nums[i]) {
          j--;
      }
      swap(nums, i, j);
  }
  reverse(nums, i + 1);
  return nums
}

const reverse=(nums, start) =>{
  let i = start, j = nums.length - 1;
  while (i < j) {
      swap(nums, i, j);
      i++;
      j--;
  }
}

const swap=(nums,  i, j)=> {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// const reverse = (nums, min = 0, max = nums.length - 1) => {
//   while (min < max) {
//     [nums[min], nums[max]] = [nums[max], nums[min]]
//     min++
//     max--
//   }
//   return nums;
// };

// const swap = (nums, min, max = min+1) => {
//   let minDif= Number.MAX_VALUE, minIndex;
//   while (max <= nums.length-1) {
//     if (nums[max] - nums[min] < minDif) {
//       minDif = Math.min(nums[max] - nums[min]);
//       minIndex = max
//     }
//     if (nums[min] >= nums[max]) {
//       [nums[min], nums[max-1]] = [nums[max-1], nums[min]]
//       return nums;
//     }
//     max++;
//   }
//   [nums[min], nums[minIndex]] = [nums[minIndex], nums[min]]
//   return nums;
// };

// const nextPermutation = function (nums) {
//   let min = 0,
//     max = nums.length - 1;
//   while (min <= max) {
//     if (nums[max - 1] < nums[max]) {
//       swap(nums, max - 1)
//       return reverse(nums, max)
//     }
//     max--;
//   }
//   return reverse(nums)
// };


console.log('nextPermutation([1, 5, 8, 4, 7, 6, 5, 3, 1])',nextPermutation([1, 5, 8, 4, 7, 6, 5, 3, 1])); // [1, 5, 8, 5, 7, 6, 4, 3, 1]
console.log('nextPermutation([7, 2, 3, 1, 5, 4, 3, 2, 0] )', nextPermutation([7, 2, 3, 1, 5, 4, 3, 2, 0] )); // [7, 2, 3, 2, 0, 1, 3, 4, 5]
console.log('nextPermutation([1,3,2])', nextPermutation([1, 3, 2])); // [2,1,3]
console.log('nextPermutation([2,3,1,3,3])', nextPermutation([2,3,1,3,3])) // [2,3,3,1,3]
console.log('nextPermutation([1,2,3])', nextPermutation([1, 2, 3])); // [1,3,2]
console.log('nextPermutation([1,1,5])', nextPermutation([1, 1, 5])); // [1,5,1]
console.log('nextPermutation([3,2,1])', nextPermutation([3, 2, 1])); // [1,2,3]
