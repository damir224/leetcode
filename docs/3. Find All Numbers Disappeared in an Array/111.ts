function findDisappearedNumbers(nums: number[]): number[] {
  const length = nums.length
  let i = 0
  while( i < length ) {
      const pos = nums[i] - 1;
      if(nums[i] !== nums[pos]) {
        [nums[i], nums[pos]] = [nums[pos], nums[i]];
      } else {
        i += 1;
      }
  }

  
  return nums.reduce((acc, cur, i)=>{
    
      if(nums[i] !== i + 1) {
          acc.push(i + 1)
      }
      return acc
  }, [])
};
// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
console.log(findDisappearedNumbers([4,3,2,7,7,2,3,1]))
// console.log(findDisappearedNumbers([1, 1]))


