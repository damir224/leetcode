const minimumDifference = function(nums, k) {
  // let count=0;
  const arr = [...nums.sort((a,b)=>{
    // count++
    return a-b})]
    const l = arr.length
  // let res = arr[l-1], windowStart = 0, windowEnd = 0;
  let res = arr[l-1];
  // while(windowEnd < arr.length) {
  //   // count++
  //   if (windowEnd - windowStart === k - 1) {
  //     res = Math.min(arr[windowEnd] - arr[windowStart], res)
  //     windowStart++
  //   }
  //   windowEnd++
  // }
  for (let index = 0; index <= l-k; index++) {
    // count++
    res = Math.min(arr[index+k-1] - arr[index], res)
  }
  // console.log('count', count)
  return res
};

console.log('minimumDifference([87063,61094,44530,21297,95857,93551,9918], 6)', minimumDifference([87063,61094,44530,21297,95857,93551,9918], 6)) // 74560
// console.log('minimumDifference([90], 1)', minimumDifference([90], 1)) // 0
console.log('minimumDifference([9,4,1,7], 2)', minimumDifference([9,4,1,7], 2)) // 2
