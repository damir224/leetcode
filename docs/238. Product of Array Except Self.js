/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const arr = []
  for (let i = 0; i < nums.length; i++) { 
    let n = nums.reduce((acc, cur, idx) => {
      if(idx === 1 && i === 0) {return acc = cur}
      if (idx === i) {
        return acc;
      } else {
        acc = acc * cur;
        return acc;
      }
    });
    arr.push(n);
  }
  return arr
};

console.log(`productExceptSelf([1,2,3,4])`, productExceptSelf([1,2,3,4])) // [24,12,8,6]
console.log(`productExceptSelf([-1,1,0,-3,3])`, productExceptSelf([-1,1,0,-3,3])) // [0,0,9,0,0]
console.log(`productExceptSelf([-1,1,0,-3,3])`, productExceptSelf([4,3,2,1,2])) // [12,16,24,48,24]
