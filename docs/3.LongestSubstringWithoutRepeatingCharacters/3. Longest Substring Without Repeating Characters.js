const lengthOfLongestSubstring = function(s) {
    const hash = {};
    let start = 0, length = 0;
    for(let end = 0; end < s.length; end++) {
      hash[s[end]] = (hash[s[end]] ?? 0) + 1
      while(hash[s[end]] !== 1) {
        hash[s[start]] -= 1  
        start++
      } 
      length = Math.max(length, end-start+1)
    }
    return length
};

console.log('lengthOfLongestSubstring("bbbbb")', lengthOfLongestSubstring("bbbbb")) // 1
// console.log('lengthOfLongestSubstring("abcabcbb")', lengthOfLongestSubstring("abcabcbb")) // 3
// console.log('lengthOfLongestSubstring("pwwkew")', lengthOfLongestSubstring("pwwkew")) // 3

