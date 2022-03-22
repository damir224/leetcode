/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs1) {
  const strs = strs1.sort()
  const arr = [...strs[0]];
  for (let i = 1; i < strs.length; i++) {
    for (let k = 0; k < [...strs[i]].length; k++) {
      if (arr[0] !== strs[i][0]) return ''
      if (arr[k] !== strs[i][k]) {
        arr.splice(k);
        break;
      }
    }
  }
  return arr.join('');
};
// @lc code=end

