const twoSum = function (numbers, target) {
  let min = 0, max = numbers.length-1;
  while(min < max) {
    const difference = target - (numbers[max] + numbers[min])
    if(difference === 0) {
      return [min+1, max+1]
    }
    if(difference > 0) {
      min++
    } else {
      max--
    }
  }
};

console.log('twoSum([2,7,11,15], 9)', twoSum([2, 7, 11, 15], 9)); // [1,2]
console.log('twoSum([2,3,4], 6)', twoSum([2, 3, 4], 6)); // [1,3]
console.log('twoSum([-1,0], -1)', twoSum([-1, 0], -1)); // [1,2]
