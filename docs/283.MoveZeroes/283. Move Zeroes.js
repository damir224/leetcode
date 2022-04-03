const moveZeroes = function(nums) {
  let temp;
  for(let i = 0, nonZeroIndex= 0; i < nums.length; i++) {
    if(nums[i] !== 0){
      temp = nums[nonZeroIndex]
      nums[nonZeroIndex] = nums[i]
      nums[i] = temp
      nonZeroIndex++
    } 
  }
  return nums
};
console.log(`moveZeroes([0,1,0,3,12])`, moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log(`moveZeroes([0])`, moveZeroes([0])); // [0]
