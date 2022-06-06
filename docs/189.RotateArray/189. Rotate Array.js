const reverse = (nums, min=0, max=nums.length-1) => {
  let temp;
  while(min < max) {
    temp = nums[max]
    nums[max] = nums[min]
    nums[min] = temp
    min++
    max--
  }
  return nums
}

const rotate = function(nums, k) {
  k = k % nums.length;
  reverse(nums)
  reverse(nums, 0, k-1)
  reverse(nums, k)
  return nums
};

console.log('rotate([-1], 2)', rotate([-1], 2))
// console.log('rotate([1,2,3,4,5,6,7], 3)', rotate([1,2,3,4,5,6,7], 3)) // [5,6,7,1,2,3,4]
// console.log('rotate([-1,-100,3,99], 2)', rotate([-1,-100,3,99], 2)) // [3,99,-1,-100]
