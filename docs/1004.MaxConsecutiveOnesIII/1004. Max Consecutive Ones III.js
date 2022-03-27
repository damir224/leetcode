
var longestOnes = function(nums, k) {
  let maxLength = 0, windowStart = 0, flipCount = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    if(nums[windowEnd] === 0) {
      flipCount++
    }
    if(flipCount > k) {
      if(nums[windowStart] === 0) {
        flipCount--
      }
      windowStart++
    }
    
    if(flipCount <= k) {
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
  }
  return maxLength
};


console.log('6', longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)) // 6

// console.log('10', longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)) // 10
