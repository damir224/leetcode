/*
 * @lc app=leetcode id=1876 lang=javascript
 *
 * [1876] Substrings of Size Three with Distinct Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
  let count = 0
  const arr = [...s]
  const obj = {};
  let windowStart = 0
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    obj[arr[windowEnd]] = obj[arr[windowEnd]] + 1 || 1
    if (windowEnd - windowStart === 2) {
      if(Object.keys(obj).length === 3) {
        count++
      }
      if (obj[arr[windowStart]] === 1) {
        delete obj[arr[windowStart]]
      } else {
        obj[arr[windowStart]] = obj[arr[windowStart]] - 1
      }
      windowStart++
    }
  }
  return count
};
// @lc code=end

// console.log('countGoodSubstrings()', countGoodSubstrings('xyzzaz')) // 1
console.log('countGoodSubstrings()', countGoodSubstrings('aababcabc')) // 4
