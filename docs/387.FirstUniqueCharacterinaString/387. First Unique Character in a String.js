/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const letterIndex = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    arr[letterIndex]++;
  }
  for (let i = 0; i < s.length; i++) {
    const letterIndex = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    if (arr[letterIndex] === 1) {
      return i;
    }
  }
  return -1;
};

console.log(`firstUniqChar("leetcode")`, firstUniqChar('leetcode')); // 0
console.log(`firstUniqChar("loveleetcode")`, firstUniqChar('loveleetcode')); // 2
console.log(`firstUniqChar("aabb")`, firstUniqChar('aabb')); // -1
