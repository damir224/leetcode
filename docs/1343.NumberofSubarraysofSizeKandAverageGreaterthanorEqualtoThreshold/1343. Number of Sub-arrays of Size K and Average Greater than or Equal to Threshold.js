var numOfSubarrays = function(arr, k, threshold) {
  let windowStart = 0
  let count = 0;
  let sum = 0
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd]
    if (windowEnd - windowStart === k-1) {
      const average = sum / k
      if (average >= threshold) count++
      sum -= arr[windowStart]
      windowStart++
    }
  }
  return count
};

console.log('numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4)', numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4)) // 3
console.log('numOfSubarrays([11,13,17,23,29,31,7,5,2,3], 3, 5)', numOfSubarrays([11,13,17,23,29,31,7,5,2,3], 3, 5)) // 6
